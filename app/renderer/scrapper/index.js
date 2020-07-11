const fmovies = require('./fmovies');

const tvScrapers = [];
const movieScrapers = [{ fun: fmovies, name: 'fmovies' }];

function directSearchSite(item, season, episode, callback, customCache) {
  if (!item.is_movie) {
    tvScrapers.forEach((scraper) => {
      scraper
        .scrape(item, season + 1, episode + 1)
        .then(callback)
        .catch(console.error);
    });
  } else {
    movieScrapers.forEach((scraper) => {
      if (customCache && customCache.streamData && customCache.streamData[scraper.name]) {
        const streamData = customCache.streamData[scraper.name];
        callback({ data: customCache.streamData[scraper.name], type: scraper.name });
      } else {
        scraper.fun.searchSite(item).then(callback).catch(console.error);
      }
    });
  }
}

function directSearchStream(item, season, episode, callback, customCache) {
  if (!item.is_movie) {
    tvScrapers.forEach((scraper) => {
      scraper
        .scrape(item, season + 1, episode + 1)
        .then(callback)
        .catch(console.error);
    });
  } else {
    movieScrapers.forEach((scraper) => {
      if (item.streamData[scraper.name].resolve) {
        console.log('On utilise le cache');
        const resolveData = item.streamData[scraper.name].resolve;
        callback(resolveData, scraper.name);
      } else {
        console.log('On recherche');
        scraper.fun
          .searchStream(item)
          .then((res) => callback(res, scraper.name))
          .catch(console.error);
      }
    });
  }
}

module.exports = {
  directSearchSite,
  directSearchStream,
};
