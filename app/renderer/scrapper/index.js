const fmovies = require('./fmovies');
const dpstream = require('./dpstream');

const tvScrapers = [];
const movieScrapers = [
  { fun: fmovies, name: 'fmovies' },
  { fun: dpstream, name: 'dpstream' },
];
const totalScrapper = movieScrapers.length;

const n = 5;

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
        console.log('On Lit le cache');
        const streamData = customCache.streamData[scraper.name];
        callback([{ data: customCache.streamData[scraper.name], type: scraper.name }, null]);
      } else {
        scraper.fun.searchSite(item, n).then(callback).catch(console.error);
      }
    });
  }
}

module.exports = {
  directSearchSite,
  totalScrapper,
};
