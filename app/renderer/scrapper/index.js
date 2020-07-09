const fmovies = require('./fmovies');

const tvScrapers = [];
const movieScrapers = [fmovies];

function directSearch(item, season, episode, callback) {
  if (!item.is_movie) {
    tvScrapers.forEach((scraper) => {
      scraper
        .scrape(item, season + 1, episode + 1)
        .then(callback)
        .catch(console.error);
    });
  } else {
    movieScrapers.forEach((scraper) => {
      scraper.find(item).then(callback).catch(console.error);
    });
  }
}

// directSearch({
//   title: 'Solaris',
//   is_movie: true,
//   release_date: '1972'
// }, 0, 0, console.log);

module.exports = {
  directSearch,
};

// export default directSearch;
