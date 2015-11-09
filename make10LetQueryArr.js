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

// var foundWords = find10LetWordNums(areaCodesGV);
var temp = {
  "224": [
    "200",
    "201",
    "202",
    "203",
    "205",
    "206",
    "207",
    "208",
    "209",
    "210",
    "212",
    "213",
    "214",
    "215",
    "216",
    "217",
    "218",
    "220",
    "221",
    "222",
    "223",
    "225",
    "226",
    "227",
    "228"]
  }

console.log(JSON.stringify(find10LetWordNums(areaCodesGV)));


// {
//   "932": {
//     "729" : {
//       "ZEBRAWOODS" : "9327296637"
//     }
//   }
// }
