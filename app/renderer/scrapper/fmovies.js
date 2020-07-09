const request = require('request-promise');
const cheerio = require('cheerio');
const baseUrl = 'https://fmovies.to';

const fetchPage = async (url, n) => {
  const jar = request.jar();
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
  };

  try {
    // console.log(url)
    const reponse = await request({ uri: url, jar, headers, timeout: 7000 });
    return reponse;
  } catch (err) {
    if (n === 0) throw err;

    // console.log("fetchPage(): Waiting For 3 seconds before retrying the request.")
    // await waitFor(3000);
    // console.log(`Request Retry Attempt Number: ${7 - n} ====> URL: ${url}`)
    return await fetchPage(url, n - 1);
  }
};

const findServer = ($, soup) => {
  soup.map((index, element) => {
    console.log($(element).children('a'));
  });

  return [];
};

const scrape = async (item) => {
  try {
    const title = item.title.replace(/[^a-zA-Z0-9]/g, '+');
    const searchUrl = `${baseUrl}/search?keyword=${title}`;
    const html = await fetchPage(searchUrl, 6);
    // console.log(searchUrl)
    const $ = cheerio.load(html);

    const posterMap = $('.poster')
      .slice(0, 3)
      .map(async (index, element) => {
        let moviePath = element.attribs.href;
        let movieUrl = `${baseUrl}${moviePath}`;

        let response = await fetchPage(movieUrl, 6);
        console.log(response);
        let $$ = cheerio.load(response);
        let title = $$('title').text();
        let regExp = /Watch (.*)\(([^)]+)\)/;
        let matches = title.match(regExp);
        let movieTitle = matches[1].trim();
        let movieDate = matches[2];

        let soup = $('#bl-server-container');
        console.log('FIND SERVER ...');
        // console.log(soup);
        let servers = findServer($, soup);
        console.log('... FOUDED !');

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

const find = async (item) => {
  try {
    const res = await scrape(item);
    const selectedMovie = res.filter((element, index) => {
      let movieTitle = element.movieTitle;
      let movieDate = element.movieDate;
      return movieTitle == item.title && movieDate == item.release_date;
    });
    return selectedMovie;
  } catch (error) {
    throw error;
  }
};

// async function scrape(item) {
//     const title = item.title.toLowerCase().replace(':', '');
//     const year = item.release_date.split('-')[0];
//     const resolvePromises = [];
//     const headers = {};

//     try {
//         let searchUrl = `${baseUrl}/search?keyword=${title}`;
//         let response = await request({ uri: searchUrl,timeout: 7000 });
//         let $ = cheerio.load(response);
//         let poster = $(".poster");

//         poster.toArray().forEach(async element => {
//             let moviePath = element.attribs.href
//             let movieUrl = `${baseUrl}${moviePath}`;
//             console.log(movieUrl)

//             let response = await request({ uri: movieUrl, timeout: 7000 });
//             let $ = cheerio.load(response);
//             let title = $("title").text()
//             let regExp = /(.*)\(([^)]+)\)/;
//             let matches = title.match(regExp);
//             let movieTitle = matches[1]
//             let movieDate = matches[2]
//             // console.log(matches)
//             resolvePromises.push({ extracted: true, url: movieUrl, data: res });
//         });
//     } catch (err) {
//         console.error(err);
//     }
//     return Promise.all(resolvePromises);
// }

module.exports = { scrape, find };
