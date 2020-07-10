const setSource = (data,source) => {
  return data.map( (item,i) => ({ ...item, source:item.source ? item.source.append(source) : [source]}));
};

// export default getMovies

module.exports = {
	setSource,
};
