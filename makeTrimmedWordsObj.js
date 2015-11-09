// converts
//   {
//     "ABDICATION":1
//   }
// to
//   {
//     "ABDICA":"ABDICATION"
//   }

// converts
//   {
//     "ABDICATING": 1,
//     "ABDICATION": 1,
//     "ABDICATORS": 1
//   }
// to
//   {
//     "ABDICA": ["ABDICATING", "ABDICATION", "ABDICATORS"]
//   }

module.exports = function (obj, len) {
  var trimmedWords = {};
  var currWord, currFirstLets, nextFirstLets;
  var wordArr = Object.keys(obj);

  while (wordArr.length > 0) {
    currWord = wordArr[0];
    currFirstLets = currWord.split('').slice(0,len).join('');
    if (trimmedWords[currFirstLets]) {
      if (typeof trimmedWords[currFirstLets] === "string") {
        trimmedWords[currFirstLets] = [trimmedWords[currFirstLets], currWord];
      } else {
        trimmedWords[currFirstLets].push(currWord);
      }
    } else {
      trimmedWords[currFirstLets] = currWord;
    }
    wordArr.shift();
  }
  return trimmedWords;
}

