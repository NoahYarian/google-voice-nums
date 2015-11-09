var trim = require('./makeTrimmedWordsObj');
var words = require('./tenLetWords35k');

console.log(JSON.stringify(trim(words, 6)));
