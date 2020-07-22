const webvtt = require('node-webvtt');
const { newOS } = require('./OS');
const request = require('request');
const encoding = require('text-encoding');
var srt2vtt = require('srt-to-vtt');
var fs = require('fs');
const zlib = require('zlib');
const rp = require('request-promise');

const langList = ['en', 'fr', 'it'];

const createDir = (dirPath) => {
  fs.mkdir(process.cwd() + dirPath, { resursive: true }, (error) => {
    // if (error){
    //     console.log('An error occured: ', error);
    // }
    // else{
    //     console.log('Your directory is made!');
    // }
  });
};

const createFile = (filePath, fileContent) => {
  fs.writeFile(process.cwd() + filePath, fileContent, { flag: 'w' }, (error) => {
    if (error) {
      console.log('An error on file creation occured: ', error);
    } else {
      console.log('Your file is made!');
    }
  });
};

let OS = newOS();

const srt2webvtt = (data) => {
  var srt = data.replace(/\r+/g, '');
  srt = srt.replace(/^\s+|\s+$/g, '');
  var cuelist = srt.split('\n\n');
  var result = '';
  if (cuelist.length > 0) {
    result += 'WEBVTT\n\n';
    for (var i = 0; i < cuelist.length; i = i + 1) {
      result += convertSrtCue(cuelist[i]);
    }
  }
  return result;
};

const convertSrtCue = (caption) => {
  var cue = '';
  var s = caption.split(/\n/);
  while (s.length > 3) {
    for (var i = 3; i < s.length; i++) {
      s[2] += '\n' + s[i];
    }
    s.splice(3, s.length - 3);
  }
  var line = 0;
  if (!s[0].match(/\d+:\d+:\d+/) && s[1].match(/\d+:\d+:\d+/)) {
    cue += s[0].match(/\w+/) + '\n';
    line += 1;
  }
  if (s[line].match(/\d+:\d+:\d+/)) {
    var m = s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);
    if (m) {
      cue +=
        m[1] +
        ':' +
        m[2] +
        ':' +
        m[3] +
        '.' +
        m[4] +
        ' --> ' +
        m[5] +
        ':' +
        m[6] +
        ':' +
        m[7] +
        '.' +
        m[8] +
        '\n';
      line += 1;
    } else {
      return '';
    }
  } else {
    return '';
  }
  if (s[line]) {
    cue += s[line] + '\n\n';
  }
  return cue;
};

const decodeFile = async (data, subtitles, tmdbid, typePath) => {
  zlib.unzip(data, (error, buffer) => {
    if (error) {
      res = { vttstring: '', lastcue: {}, data: subtitles };
    } else {
      const decoder = new encoding.TextDecoder(subtitles.encoding);
      // console.log(decoder.decode(buffer))
      const subtitle_content = decoder.decode(buffer);
      // console.log(srt2webvtt(subtitle_content))
      const input = srt2webvtt(subtitle_content);
      const lang = subtitles.langcode;
      const id = tmdbid;

      createFile(typePath + '/subtitles.vtt', input);

      // const result = webvtt.parse(input, { strict: false });
      // console.log('ok',result.cues[result.cues.length - 1],subtitles)
      // res = {vttstring:input,lastcue:result.cues[result.cues.length - 1],data:subtitles}
    }
  });
};

const requestAndDecodeFile = async (subtitles, tmdbid, typePath) => {
  // console.log('Subtitle found:', subtitles);
  const res = rp({
    url: subtitles.url,
    encoding: null,
  })
    .then((data) => {
      decodeFile(data, subtitles, tmdbid, typePath);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSubtitlesList = async (imdbid, lang) => {
  const res = await OS.search({
    imdbid: imdbid,
    sublanguageid: lang,
    gzip: true,
    limit: 100,
  })
    .then((subtitles) => {
      return subtitles;
    })
    .catch((err) => {
      return err;
    });

  return Promise.resolve(res);
};

const findBest = (subtitlesLang, versionType) => {
  let bestResFR = subtitlesLang[0];
  let bestDownloads = 0;
  for (var i = 0; i < subtitlesLang.length; i++) {
    let downloads = subtitlesLang[i].downloads;
    let filename = subtitlesLang[i].filename;
    console.log(downloads);
    if (downloads > bestDownloads) {
      if (
        versionType === 'classic' ||
        (versionType === 'special' && filename.toLowerCase().includes('director'))
      ) {
        console.log(filename);
        bestResFR = subtitlesLang[i];
        bestDownloads = downloads;
      }
    }
  }
  return bestResFR;
};

const manageRes = async (imdbid, lang, versionType, tmdbid, typePath) => {
  let subtitlesRes = await getSubtitlesList(imdbid, lang);
  const subtitlesLang = subtitlesRes[lang];
  // console.log(subtitlesRes)
  if (subtitlesLang) {
    let bestSubtitlesRes = findBest(subtitlesLang, versionType);
    // console.log(bestSubtitlesRes)
    await requestAndDecodeFile(bestSubtitlesRes, tmdbid, typePath);
  } else {
    throw 'no subtitle found';
  }
};

async function searchSubtitles(imdbId, tmdbId, versionType) {
  // const imdbId = 'tt8772262';
  // const tmdbId = 530385;
  // const lang = 'en'
  // const versionType = 'special';

  langList.forEach(async (lang) => {
    const directoryPath = '/build/renderer/subtitles/data/' + tmdbId;
    await createDir(directoryPath);
    const langPath = directoryPath + '/' + lang;
    await createDir(langPath);
    const typePath = langPath + '/' + versionType;
    console.log(typePath);
    await createDir(typePath);
    await manageRes(imdbId, lang, versionType, tmdbId, typePath);
  });
  // console.log(res)
  // return Promise.all(res);
}

module.exports = {
  searchSubtitles,
};

// searchSubtitles('tt11057594',714375,'classic')
// searchSubtitles('en')
// searchSubtitles('it')
// manageRes('tt8772262','en')
