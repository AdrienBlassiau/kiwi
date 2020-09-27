const React = require('react');

const { newOS } = require('./OS');
const request = require('request');
const encoding = require('text-encoding');
var srt2vtt = require('srt-to-vtt');
var fs = require('fs');
const zlib = require('zlib');
const rp = require('request-promise');
const vttshift = require('vtt-shift');
var concat = require('concat-stream');

const langList = ['fr', 'en', 'it'];

const getFolderPath = (id) => {
  return process.cwd() + '/build/renderer/subtitles/data/' + id;
};

const getFilePath = (id, lang, type) => {
  return (
    process.cwd() +
    '/build/renderer/subtitles/data/' +
    id +
    '/' +
    lang +
    '/' +
    type +
    '/' +
    'subtitles.vtt'
  );
};

const shiftVTT = (filePath, offsetMs) => {
  var input = fs.readFileSync(filePath, 'utf8');
  var shift = vttshift({ offsetMs });
  shift.write(input);
  shift.end();
  shift.pipe(fs.createWriteStream(filePath));
};

const getVTTData = (id, lang, type) => {
  console.log('AVANT');
  const filePath = getFilePath(id, lang, type);
  var input = fs.readFileSync(filePath, 'utf8');
  const result = webvtt.parse(input, { strict: false });
  console.log('APRES');
  return result;
};

// const VTTshifter = (id, lang, type) => {
//   const result = getVTTData(id, lang, type).cues;
//   console.log(result);
//   const shiftTab = result.map((item, key) => {
//     <div key={key}>
//       <div>item.identifier</div>
//       <div>item.start</div>
//       <div>item.end</div>
//       <div>item.text</div>
//     </div>;
//   });
// };

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

const makeVTTab = (id, lang, type, round) => {
  let step = 1 / Math.pow(10, round);

  // [1]: We get the subtitles data
  let data = getVTTData(id, lang, type);
  let vttTab = [];
  let cues = data.cues;

  // [2]: We discretises time by rounded it every step seconds
  for (var i = 0; i < cues.length; i++) {
    cues[i].fixedStart = +data.cues[i].start.toFixed(round);
    cues[i].fixedEnd = +data.cues[i].end.toFixed(round);
  }

  // [3]: We get the last cues time
  let last = cues[cues.length - 1].fixedEnd;

  // [4]: We create the vttTab, with a content every step seconds
  let n = 0;
  let j = 0;
  let c = 0;
  let current = false;
  let processed = false;

  while (n <= last) {
    processed = false;
    if (j < cues.length) {
      let value1 = n.toFixed(round);
      let value2 = cues[j].fixedStart.toFixed(round);
      let value3 = cues[j].fixedEnd.toFixed(round);

      if (value1 - value2 >= 0 && value3 - value1 >= 0) {
        current = true;
        vttTab[c] = cues[j].text;
        processed = true;
      }
    }
    if (!processed) {
      if (current) {
        j += 1;
        current = false;
      }
      vttTab[c] = '';
    }
    c += 1;
    n += step;
  }

  return [cues, vttTab];
};

const rebuild = (vttTab) => {
  let rebuildVtt = [];
  let currentText = 'AZERTY';
  let processed = false;
  let id = 0;
  for (var i = 0; i < vttTab.length; i++) {
    let text = vttTab[i];
    // console.log(text,i)
    if (text !== currentText && processed) {
      rebuildVtt[rebuildVtt.length - 1]['end'] = i / 10;
      processed = false;
    }
    if (text !== currentText && !processed) {
      currentText = text;
      rebuildVtt.push({ start: i / 10, text: text, identifier: id });
      processed = true;
      id += 1;
    }
  }
  rebuildVtt[rebuildVtt.length - 1]['end'] = (i - 1) / 10;
  return rebuildVtt;
};

const rebuildV2 = (vttTab, first, offSet) => {
  let rebuildVtt = [];
  let currentText = 'AZERTY';
  let processed = false;
  let id = 0;
  let trueFirst = Math.max(0, first);
  let trueLast = Math.min(first + offSet, vttTab.length);
  trueLast = Math.max(trueLast, offSet);

  for (var i = trueFirst; i <= trueLast; i++) {
    let text = vttTab[i];
    // console.log(text,i)
    if (text !== currentText && processed) {
      rebuildVtt[rebuildVtt.length - 1]['end'] = i / 10;
      processed = false;
    }
    if (text !== currentText && !processed) {
      currentText = text;
      rebuildVtt.push({ start: i / 10, text: text, identifier: id });
      processed = true;
      id += 1;
    }
  }
  rebuildVtt[rebuildVtt.length - 1]['end'] = (i - 1) / 10;
  return rebuildVtt;
};

module.exports = {
  searchSubtitles,
  getFolderPath,
  getFilePath,
  shiftVTT,
  getVTTData,
  makeVTTab,
  rebuild,
  rebuildV2,
  // VTTshifter,
};

// let vttTab = makeVTTab(106, 'en', 'classic',1)
// for (var i = 0; i < vttTab[1].length; i++) {
//   console.log(vttTab[1][i],i)
// }

// let vttTab = makeVTTab(106, 'en', 'classic',1)
// let rebuildTab = rebuild(vttTab[1])
// for (var i = 0; i < rebuildTab.length; i++) {
//   console.log(rebuildTab[i])
// }

// searchSubtitles('tt11057594',714375,'classic')
// searchSubtitles('en')
// searchSubtitles('it')
// manageRes('tt8772262','en')
