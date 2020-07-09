const axios = require('axios');

const fetchPage = async (url, n) => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    if (n === 0) throw err;

    console.log('fetchPage(): Waiting For 3 seconds before retrying the request.');
    await waitFor(3000);
    console.log(`Request Retry Attempt Number: ${7 - n} ====> URL: ${url}`);
    return await fetchPage(url, n - 1);
  }
};

module.exports = {
  fetchPage,
};
