const { getFolderPath, getFilePath, shiftVTT, getVTTData } = require('./index.js');

const makeVTTTab = (id, lang, type, round) => {
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

  return vttTab;
};

// let vttTab = makeVTTTab(106, 'en', 'classic',2)

// let time = 0
// let iter = 0
function doStuff() {
  console.log(vttTab[iter]);
  time += 0.01;
  iter += 1;
  let fixedTime = time.toFixed(2);
  console.log('Hello:', fixedTime);
}
setInterval(doStuff, 10);
