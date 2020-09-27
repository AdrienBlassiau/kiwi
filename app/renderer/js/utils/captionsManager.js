const fs = require('fs');
const webvtt = require('node-webvtt');

const getVTTData = () => {
  let filePath = "/home/adrien/Documents/.kiwi/subs/subs.vtt";
  let input = fs.readFileSync(filePath, 'utf8');
  let result = webvtt.parse(input, { strict: false });
  return result.cues;
};

module.exports = {
  getVTTData,
};
