var tenLets = require('./tenLetWords');
var tenLetsFirst6 = require('./tenLetsFirst6');
var areaCodesGV = require('./GVAreaCodesActivePrefixes'); // this is acs without 0 or 1 but prefixes with them
var phoneSpell = require('./phoneSpell');
var alphaToNum = require('./alphaToNum');


function find10LetWordNums (areaCodes) {
  var areaCode, prefix, strChoices, str, tenLetsArrOrStr, tenLetWord;
  var results = {};
  var count = 0;

  // for (var i = 0; i < areaCodes.length; i++) {
  for (areaCode in areaCodes) {
    // areaCode = areaCodes[i];
    results[areaCode] = {};
    console.log('Working on area code ' + areaCode + '. Found ' + count + ' words so far...');
    for (var j = 0; j < areaCodes[areaCode].length; j++) {
      prefix = areaCodes[areaCode][j];
      // console.log(prefix);
      results[areaCode][prefix] = {};
      strChoices = phoneSpell(areaCode + prefix, true, true, true);
      for (var k = 0; k < strChoices.length; k++) {
        str = strChoices[k];
        // console.log(str);
        if (tenLetsFirst6[str]) {
          tenLetsArrOrStr = tenLetsFirst6[str];
          if (typeof tenLetsArrOrStr === "string") {
            tenLetWord = tenLetsArrOrStr;
            num = alphaToNum(tenLetWord);
            results[areaCode][prefix][tenLetWord] = num;
            count++;
          } else {
            for (var l = 0; l < tenLetsArrOrStr.length; l++) {
              tenLetWord = tenLetsArrOrStr[l];
              num = alphaToNum(tenLetWord);
              results[areaCode][prefix][tenLetWord] = num;
              count++;
            }
          }
        }
      }
    }
  }

  return results;
}

var foundWords = find10LetWordNums(areaCodesGV);
var wordsArr = [];

for (var ac in foundWords) {
  for (var pre in foundWords[ac]) {
    for (var word in foundWords[ac][pre]) {
      wordsArr.push(word)
    }
  }
}

console.log(wordsArr);


// {
//   "932": {
//     "729" : {
//       "ZEBRAWOODS" : "9327296637"
//     }
//   }
// }
