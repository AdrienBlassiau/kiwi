const { Builder, By, Key, until } = require('selenium-webdriver');
const request = require('request-promise');
const cheerio = require('cheerio');
const baseUrl = 'https://dpstream-hd.com';
const { wait } = require('./utils');
const timeout = 5000;
const { newDriver, safeQuit } = require('./driver');
const { searchSubtitles } = require('../subtitles/index.js');
var levenshtein = require('fast-levenshtein');

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
    let frenchTitle = item.translations
      ? item.translations.translations.filter((data) => data.iso_3166_1 === 'FR')[0].data.title
      : item.title;

    frenchTitle = frenchTitle === '' ? item.title : frenchTitle;
    const title = encodeURI(frenchTitle);
    // console.log(title)
    const searchUrl = `${baseUrl}/?s=${title}`;
    const html = await fetchPage(searchUrl, 6);
    const $ = cheerio.load(html);

    const posterMap = $('.result-item')
      .slice(0, 3)
      .map(async (index, element) => {
        let movieUrl = $(element).find('a').toArray()[0].attribs.href;

        let response = await fetchPage(movieUrl, 6);

        let $$ = cheerio.load(response);

        let movieTitle = $$('.data').find('h1').toArray()[0].children[0].data;

        let date = $$('.date').text();
        let regExp = /(.*), (.*)/;
        let matches = date.match(regExp);
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
    let frenchTitle = item.translations
      ? item.translations.translations.filter((data) => data.iso_3166_1 === 'FR')[0].data.title
      : item.title;
    frenchTitle = frenchTitle === '' ? item.title : frenchTitle;
    const res = await scrape(item);
    const selectedMovie = res.filter((element, index) => {
      let movieTitle = element.movieTitle;
      let movieDate = element.movieDate;
      var distance = levenshtein.get(movieTitle.toLowerCase(), frenchTitle.toLowerCase());
      // console.log("distance",distance)
      return distance <= 2 && movieDate == item.release_date;
    });

    const streamData = selectedMovie.length > 0 ? selectedMovie[0] : {};
    return searchStream(streamData);
  } catch (error) {
    if (n === 0) throw error;
    return searchSite(item, n - 1);
    throw error;
  }
};

async function run_aux(maxTries, streamData, driver) {
  let resolvePromises = [];
  try {
    console.log('Preparing request ...');
    await driver.get(streamData.movieUrl);

    let xpath1 = '/html/body/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]/div/div/iframe';
    await driver.wait(until.elementLocated(By.xpath(xpath1)), timeout);
    await driver.switchTo().frame(driver.findElement(By.xpath(xpath1)));
    let xpath2 = '//*[@id="iframe-el"]';
    await driver.wait(until.elementLocated(By.xpath(xpath2)), timeout);
    await driver.switchTo().frame(driver.findElement(By.xpath(xpath2)));

    await driver.wait(until.elementLocated(By.tagName('video')), timeout);
    let urlRes = await driver.findElement(By.tagName('video')).getAttribute('src');
    await driver.switchTo().defaultContent();

    if (urlRes === '') {
      await resolvePromises.push({});
    } else {
      let imdbId = streamData.imdbId;
      let tmdbId = streamData.tmdbId;
      let type = 'classic';
      let quality = 'hd';

      searchSubtitles(imdbId, tmdbId, type);
      await resolvePromises.push({
        url: urlRes,
        type: type,
        language: 'V.F.',
        quality: quality,
        id: tmdbId,
      });
    }

    return resolvePromises;
  } catch (err) {
    if (maxTries <= 0) {
      return resolvePromises;
    }
    return run_aux(maxTries - 1, streamData, driver);
  }
}

async function searchStream(streamData) {
  console.log(streamData);
  if (JSON.stringify(streamData) !== JSON.stringify({})) {
    const driver = await newDriver();

    const res = await run_aux(5, streamData, driver);

    const finalStreamData = { ...streamData, resolve: res };
    const content = { data: finalStreamData, type: 'dpstream' };
    return Promise.all([content, driver]);
  } else {
    const finalStreamData = { ...streamData, resolve: [] };
    const content = { data: finalStreamData, type: 'dpstream' };

    return Promise.all([content, null]);
  }
}

module.exports = { searchSite, searchStream };

// const item = {
//   title: "Interstellar",
//   is_movie: true,
//   release_date: "2014",
//   tmdb_id: 157336,
//   imdb_id: "tt0816692",
//   translations: null
// }

// searchSite(item,2)
