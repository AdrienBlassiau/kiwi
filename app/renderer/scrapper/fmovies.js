const { Builder, By, Key, until } = require('selenium-webdriver');
const request = require('request-promise');
const cheerio = require('cheerio');
const baseUrl = 'https://fmovies.to';
const { wait } = require('./utils');
const timeout = 5000;

const fetchPage = async (url, n) => {
  const jar = request.jar();
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
  };

  try {
    const reponse = await request({ uri: url, jar, headers, timeout: 7000 });
    return reponse;
  } catch (err) {
    if (n === 0) throw err;
    return await fetchPage(url, n - 1);
  }
};

const scrape = async (item) => {
  try {
    const title = encodeURI(item.title);
    const searchUrl = `${baseUrl}/search?keyword=${title}`;
    const html = await fetchPage(searchUrl, 6);
    // console.log(searchUrl);
    // console.log(title);
    const $ = cheerio.load(html);

    const posterMap = $('.poster')
      .slice(0, 3)
      .map(async (index, element) => {
        let moviePath = element.attribs.href;
        let movieUrl = `${baseUrl}${moviePath}`;

        let response = await fetchPage(movieUrl, 6);
        // console.log(response);
        let $$ = cheerio.load(response);
        let title = $$('title').text();
        let regExp = /Watch (.*)\(([^)]+)\)/;
        let matches = title.match(regExp);
        let movieTitle = matches[1].trim();
        let movieDate = matches[2];

        return {
          searchUrl,
          movieUrl,
          movieTitle,
          movieDate,
        };
      })
      .get();

    return Promise.all(posterMap);
  } catch (error) {
    throw error;
  }
};

const searchSite = async (item) => {
  console.log('searchSite :');
  try {
    const res = await scrape(item);
    console.log(res);
    const selectedMovie = res.filter((element, index) => {
      let movieTitle = element.movieTitle;
      let movieDate = element.movieDate;
      return movieTitle.toLowerCase() == item.title.toLowerCase() && movieDate == item.release_date;
    });
    // console.log('IN');
    return { data: selectedMovie.length > 0 ? selectedMovie[0] : [], type: 'fmovies' };
  } catch (error) {
    console.log(err);
    throw error;
  }
};

async function removeOverlay(driver) {
  await wait(1000);
  const overlay_css = 'z-index: 2147483647;';

  try {
    // await driver.manage().window().setRect(10,10);
    await driver.manage().window().maximize();
    // await driver.switchTo().defaultContent();
    // await driver.switchTo().defaultContent();
    console.log('On clic');
    // let body = await driver.findElement(By.tagName('body'))
    // await body.click()
    // console.log("On clic")
    await driver.wait(until.elementLocated(By.css("div[style*='" + overlay_css + "']")), timeout);
    const parentElement = await driver.findElement(By.css("div[style*='" + overlay_css + "']"));
    console.log(await parentElement.getAttribute('style'));
    let a = await parentElement.findElement(By.tagName('a'));
    console.log(await a.getAttribute('style'));
    await a.click();
    // await parentElement.click();
    // return removeOverlay(driver)
    // elementList = parentElement.find_elements_by_tag_name("li")
  } catch (err) {
    console.log('PAS DE SELECTEUR');
    // return "No more overlay"
  }
}

async function clickUntilOk(driver, selector, n, text) {
  console.log('On switch');
  let url = await driver
    .findElement(By.css(selector))
    .click()
    .then(async () => {
      console.log('REQUEST OK !');
      await driver.wait(
        until.elementLocated(By.xpath("//iframe[@style='width: 100%; height: 100%;']")),
        timeout,
      );
      console.log('ok 2');
      await driver
        .switchTo()
        .frame(driver.findElement(By.xpath("//iframe[@style='width: 100%; height: 100%;']")));
      console.log("On est sur l'IFRAME");
      console.log('ok 3');
      await driver.wait(until.elementLocated(By.id('videolink')), timeout);
      console.log('ok 4');
      let res = await driver.findElement(By.id('videolink')).getAttribute('innerText');
      await driver.switchTo().defaultContent();
      console.log("On est plus sur l'IFRAME");
      // console.log(await res.getAttribute("innerText"))
      return res;
    })
    .catch(async (err) => {
      await driver.switchTo().defaultContent();
      console.log("On est plus sur l'IFRAME");
      await removeOverlay(driver);
      // console.log(err)
      if (n === 0) throw err;
      console.log('REQUEST NOK !');
      return clickUntilOk(driver, selector, n - 1, text);
    });

  return url;
}

async function processArray(resolvePromises, array, $, driver) {
  for (const element of array) {
    // console.log($(element).attr('href'))
    // console.log($(element).attr('data-id'))
    // console.log($(element).text())
    const text = $(element).text();
    const data_id = $(element).attr('data-id');
    const selector = "a[data-id='" + data_id + "']";
    console.log('STREAM : ', text);
    // console.log(selector)
    // console.log(createXPathFromElement(element))

    if (text.includes('Stream')) {
      console.log("C'EST DU STREAM");
      let urlRes = await clickUntilOk(driver, selector, 10, text);
      await resolvePromises.push({ url: 'http:' + urlRes, type: text, language: 'V.O.' });
      console.log('On push:', urlRes);
    }
  }

  return await resolvePromises;
}

async function run_aux(maxTries, url, driver) {
  let resolvePromises = [];
  try {
    console.log('Preparing request ...');
    await driver.get(url);
    await driver.wait(until.elementLocated(By.className('episodes')), timeout);
    const pageContent = await driver.getPageSource();
    const $ = cheerio.load(pageContent);
    console.log('Request done ...');

    const dataArray = $('.episodes').find('li > a').toArray();
    // await driver.manage().window().maximize();
    resolvePromises = await processArray(resolvePromises, dataArray, $, driver);

    return resolvePromises;
  } catch (err) {
    // console.log(err)
    console.log(maxTries);
    if (maxTries <= 0) {
      console.log('Retry');
      // console.error('Exception!\n', err.stack, '\n');
      throw err;
    }
    return run_aux(maxTries - 1, url, driver);
  }
}

async function searchStream(item) {
  console.log('DANS LE SEARCH STREAM');

  const streamData = item.streamData['fmovies'];
  const url = streamData.movieUrl;
  const res = await run_aux(5, url, item.driver);

  return Promise.all(res);
}

module.exports = { searchSite, searchStream };
