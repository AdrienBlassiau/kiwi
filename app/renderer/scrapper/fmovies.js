const { Builder, By, Key, until } = require('selenium-webdriver');
const request = require('request-promise');
const cheerio = require('cheerio');
const baseUrl = 'https://ffmovies.co';
const { wait } = require('./utils');
const timeout = 5000;
const { newDriver, safeQuit } = require('./driver');
const { searchSubtitles } = require('../subtitles/index.js');

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
        let tmdbId = item.tmdb_id;
        let imdbId = item.imdb_id;

        return {
          searchUrl,
          movieUrl,
          movieTitle,
          movieDate,
          tmdbId,
          imdbId,
        };
      })
      .get();

    return Promise.all(posterMap);
  } catch (error) {
    throw error;
  }
};

const searchSite = async (item, n) => {
  try {
    const res = await scrape(item);
    const selectedMovie = res.filter((element, index) => {
      let movieTitle = element.movieTitle;
      let movieDate = element.movieDate;
      return movieTitle.toLowerCase() == item.title.toLowerCase() && movieDate == item.release_date;
    });
    // console.log('IN');
    const streamData = selectedMovie.length > 0 ? selectedMovie[0] : {};
    return searchStream(streamData);
    // return { data: selectedMovie.length > 0 ? selectedMovie[0] : [], type: 'fmovies' };
  } catch (error) {
    if (n === 0) throw error;
    return searchSite(item, n - 1);
    throw error;
  }
};

async function removeOverlay(driver) {
  await wait(1000);
  const overlay_css = 'z-index: 2147483647;';

  try {
    await driver.manage().window().maximize();
    await driver.wait(until.elementLocated(By.css("div[Index*='" + overlay_css + "']")), timeout);
    const parentElement = await driver.findElement(By.css("div[Index*='" + overlay_css + "']"));
    let a = await parentElement.findElement(By.tagName('a'));
    await a.click();
    // await parentElement.click();
    // return removeOverlay(driver)
    // elementList = parentElement.find_elements_by_tag_name("li")
  } catch (err) {
    // console.log('PAS DE SELECTEUR');
    // return "No more overlay"
  }
}

async function clickUntilOk(driver, selector, n, text) {
  // console.log('On switch');
  let url = await driver
    .findElement(By.css(selector))
    .click()
    .then(async () => {
      // console.log('REQUEST OK !');
      await driver.wait(
        until.elementLocated(By.xpath("//iframe[@Index='width: 100%; height: 100%;']")),
        timeout,
      );
      // console.log('ok 2');
      await driver
        .switchTo()
        .frame(driver.findElement(By.xpath("//iframe[@Index='width: 100%; height: 100%;']")));
      // console.log("On est sur l'IFRAME");
      // console.log('ok 3');
      await driver.wait(until.elementLocated(By.id('videolink')), timeout);
      // console.log('ok 4');
      let res = await driver.findElement(By.id('videolink')).getAttribute('innerText');
      await driver.switchTo().defaultContent();
      // console.log("On est plus sur l'IFRAME");
      // console.log(await res.getAttribute("innerText"))
      return res;
    })
    .catch(async (err) => {
      await driver.switchTo().defaultContent();
      // console.log("On est plus sur l'IFRAME");
      await removeOverlay(driver);
      // console.log('N:', n);
      if (n === 0) return '';
      // console.log('REQUEST NOK !');
      return clickUntilOk(driver, selector, n - 1, text);
    });

  return url;
}

async function processArray(resolvePromises, array, $, driver, streamData) {
  for (const element of array) {
    // console.log($(element).attr('href'))
    // console.log($(element).attr('data-id'))
    // console.log($(element).text())
    const text = $(element).text();
    const data_id = $(element).attr('data-id');
    const selector = "a[data-id='" + data_id + "']";
    // console.log('STREAM : ', text);
    // console.log(selector)
    // console.log(createXPathFromElement(element))

    if (text.includes('Stream')) {
      // console.log("C'EST DU STREAM");
      let urlRes = await clickUntilOk(driver, selector, 5, text);
      if (urlRes === '') {
        await resolvePromises.push({});
      } else {
        let imdbId = streamData.imdbId;
        let tmdbId = streamData.tmdbId;
        let type = 'classic';
        let quality = 'sd';

        if (text.toLowerCase().includes('director')) {
          type = 'special';
        } else {
          type = 'classic';
        }
        if (text.toLowerCase().includes('hd')) {
          quality = 'hd';
        } else {
          quality = 'sd';
        }

        searchSubtitles(imdbId, tmdbId, type);
        await resolvePromises.push({
          url: 'http:' + urlRes,
          type: type,
          language: 'V.0.',
          quality: quality,
          id: tmdbId,
        });
      }
      // console.log('On push:', urlRes);
    }
  }

  return await resolvePromises;
}

async function run_aux(maxTries, streamData, driver) {
  let resolvePromises = [];
  try {
    // console.log('Preparing request ...');
    await driver.get(streamData.movieUrl);
    await driver.wait(until.elementLocated(By.className('episodes')), timeout);
    const pageContent = await driver.getPageSource();
    const $ = cheerio.load(pageContent);
    // console.log('Request done ...');

    const dataArray = $('.episodes').find('li > a').toArray();
    // await driver.manage().window().maximize();
    resolvePromises = await processArray(resolvePromises, dataArray, $, driver, streamData);

    return resolvePromises;
  } catch (err) {
    // console.log(err)
    // console.log(maxTries);
    if (maxTries <= 0) {
      // console.log('Retry');
      // console.error('Exception!\n', err.stack, '\n');
      return resolvePromises;
    }
    return run_aux(maxTries - 1, streamData, driver);
  }
}

async function searchStream(streamData) {
  console.log('DANS LE SEARCH STREAM', streamData);
  if (JSON.stringify(streamData) !== JSON.stringify({})) {
    const driver = await newDriver();

    const res = await run_aux(5, streamData, driver);

    const finalStreamData = { ...streamData, resolve: res };
    const content = { data: finalStreamData, type: 'fmovies' };

    return Promise.all([content, driver]);
  } else {
    const finalStreamData = { ...streamData, resolve: [] };
    const content = { data: finalStreamData, type: 'fmovies' };

    return Promise.all([content, null]);
  }
}

module.exports = { searchSite, searchStream };
