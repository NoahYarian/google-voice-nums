var data = require('./areaCodePrefixes 8th Nov 19_17.json');
var url, ac, chunk;
var areaCodes = {};

for (var i = 0; i < data.pages.length; i++) {
  url = data.pages[i].pageUrl;
  ac = url.split('').slice(46, 49).join('');
  areaCodes[ac] = [];
  for (var j = 0; j < data.pages[i].results.length; j++) {
    chunk = data.pages[i].results[j].prefixes;
    chunk = typeof chunk === "number" ? [chunk] : chunk;
    // console.log(chunk, areaCodes);
    areaCodes[ac].push.apply(areaCodes[ac], chunk); // http://stackoverflow.com/questions/5080028/what-is-the-most-efficient-way-to-concatenate-n-arrays-in-javascript
  }
}

console.log(JSON.stringify(areaCodes));
