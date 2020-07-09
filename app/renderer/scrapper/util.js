// const request = require('request-promise-native');

function filterVideoLinkList(list) {
  return list
    .filter(
      (url) =>
        url.includes('videobin') ||
        url.includes('vidlox') ||
        url.includes('gorillavid') ||
        url.includes('vidoza') ||
        url.includes('vidtodo') ||
        url.includes('entervideo') ||
        url.includes('verystream') ||
        url.includes('abcvideo') ||
        url.includes('clipwatching') ||
        url.includes('vshare'),
    )
    .slice(0, 35);
}

function formatTitle(title) {
  const replacements = [
    [' & ', '-'],
    [':', ''],
    ["'", ''],
  ];
  replacements.forEach((r) => title.replace(r[0], r[1]));
  return title.toLowerCase();
}

function extractImdbId(str) {
  const pattern = /ev\d{7}\/\d{4}(-\d)?|(ch|co|ev|nm|tt)\d{7}/;
  return str.match(pattern);
}

async function getIP() {
  const response = await request('http://icanhazip.com');
  return response.trim();
}

function normalizeUrl(link, defaultScheme = 'http') {
  if (link.startsWith('//')) {
    link = `${defaultScheme}:${link}`;
  }
  return link;
}

var unpacker = {
  unpack: function (str) {
    var params = unpacker.filterargs(str);
    var payload = params[0],
      symtab = params[1],
      radix = params[2],
      count = params[3];
    if (count != symtab.length) {
      throw new Error('Malformed p.a.c.k.e.r. symtab. (' + count + ' != ' + symtab.length + ')');
    }
    var unbase = unpacker.unbaser(radix);
    var lookup = (word) => symtab[unbase(word)] || word;
    source = payload.replace(/\b\w+\b/g, lookup);
    return source;
  },
  filterargs: function (str) {
    /* [\s\S] insteadof . because javascript has no dotall modifier */
    var juicers = [
      /}\('([\s\S]*)', *(\d+), *(\d+), *'([\s\S]*)'\.split\('\|'\), *(\d+), *([\s\S]*)\)\)/,
      /}\('([\s\S]*)', *(\d+), *(\d+), *'([\s\S]*)'\.split\('\|'\)/,
    ];
    for (var c = 0; c < juicers.length; ++c) {
      var m,
        juicer = juicers[c];
      if ((m = juicer.exec(str))) {
        return [m[1], m[4].split('|'), parseInt(m[2]), parseInt(m[3])];
      }
    }
    throw new Error('Could not make sense of p.a.c.k.e.r data (unexpected code structure)');
  },
  alphabet: {
    62: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    95: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
  },
  unbaser: function (base) {
    if (2 <= base <= 36) return (str) => parseInt(str, base);
    var dictionary = {};
    var alphabet = unpacker.alphabet[base];
    if (!alphabet) throw new Error('Unsupported encoding');
    for (var c = 0; c < alphabet.length; ++alphabet) {
      dictionary[alphabet[c]] = c;
    }
    return (str) =>
      str
        .split('')
        .reverse()
        .reduce((cipher, ind) => Math.pow(base, ind) * dictionary[cipher]);
  },
};

module.exports = {
  filterVideoLinkList,
  extractImdbId,
  getIP,
  normalizeUrl,
  formatTitle,
  unpacker,
};
