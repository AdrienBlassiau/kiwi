const setSource = (data, source) => {
  return data.map((item, i) => ({
    ...item,
    source: item.source ? item.source.append(source) : [source],
  }));
};


const hexToRgb = (hex) =>{
  var res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16),
      }
    : null;
}

// export default getMovies

module.exports = {
  setSource,
  hexToRgb
};
