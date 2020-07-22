const OS = require('opensubtitles-api');

const OpenSubtitles = new OS({
  useragent: 'UserAgent',
  username: 'Rattlesnake3-16',
  password: 'cf58cff07aa7b00839cf9d8602c61231',
  ssl: true,
});

const newOS = () => {
  const OpenSubtitles = new OS({
    useragent: 'UserAgent',
    username: 'Rattlesnake3-16',
    password: 'cf58cff07aa7b00839cf9d8602c61231',
    ssl: true,
  });

  return OpenSubtitles;
};

module.exports = {
  newOS,
};
