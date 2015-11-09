module.exports = function (num, noNums, needVowels, yOk) {

  var numStr = '' + num; // allows for either numbers or strings to be supplied
  var numArr = numStr.split('');
  var possibleChars = [];
  var possibleStrs = [];
  var permNum = 1;
  var arr = Array(numStr.length);

  if ( numStr.indexOf("2") === -1
    && numStr.indexOf("3") === -1
    && numStr.indexOf("4") === -1
    && numStr.indexOf("6") === -1
    && numStr.indexOf("8") === -1 ) {

    if (needVowels && !yOk) {
      // console.log("no non-Y vowels present.");
      return false;
    }
    if (numStr.indexOf("9") === -1) {
      // console.log("no vowels present.");
      if (needVowels) {
        return false;
      }
    } else {
      // console.log("only vowel present is a Y.");
    }
  }

  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] === "0") {
      if (noNums) {
        // console.log("There are no letters on the 0 button.")
        return false;
      }
      possibleChars.push("0");
    } else if (numArr[i] === "1") {
      if (noNums) {
        // console.log("There are no letters on the 1 button.")
        return false;
      }
      possibleChars.push("1");
    } else if (numArr[i] === "2") {
      possibleChars.push(noNums ? "ABC" : "2ABC");
    } else if (numArr[i] === "3") {
      possibleChars.push(noNums ? "DEF" : "3DEF");
    } else if (numArr[i] === "4") {
      possibleChars.push(noNums ? "GHI" : "4GHI");
    } else if (numArr[i] === "5") {
      possibleChars.push(noNums ? "JKL" : "5JKL");
    } else if (numArr[i] === "6") {
      possibleChars.push(noNums ? "MNO" : "6MNO");
    } else if (numArr[i] === "7") {
      possibleChars.push(noNums ? "PQRS" : "7PQRS");
    } else if (numArr[i] === "8") {
      possibleChars.push(noNums ? "TUV" : "8TUV");
    } else if (numArr[i] === "9") {
      possibleChars.push(noNums ? "WXYZ" : "9WXYZ");
    }
  }

  for (var j = 0; j < possibleChars.length; j++) {
    permNum *= possibleChars[j].length;
  }

  // console.log("possible combinations: " + permNum);
  // console.log(possibleChars);

  for (var k = 0; k < possibleChars[0].length; k++) {
    arr[0] = (possibleChars[0][k]);
    for (var l = 0; l < possibleChars[1].length; l++) {
      arr[1] = (possibleChars[1][l]);
      for (var m = 0; m < possibleChars[2].length; m++) {
        arr[2] = (possibleChars[2][m]);

        if (possibleChars.length > 3) {
          for (var n = 0; n < possibleChars[3].length; n++) {
            arr[3] = (possibleChars[3][n]);

            if (possibleChars.length > 4) {
              for (var o = 0; o < possibleChars[4].length; o++) {
                arr[4] = (possibleChars[4][o]);
                for (var p = 0; p < possibleChars[5].length; p++) {
                  arr[5] = (possibleChars[5][p]);

                  if (possibleChars.length > 6) {
                    for (var q = 0; q < possibleChars[6].length; q++) {
                      arr[6] = (possibleChars[6][q]);

                      if (possibleChars.length === 10) {
                        for (var r = 0; r < possibleChars[7].length; r++) {
                          arr[7] = (possibleChars[7][r]);
                          for (var s = 0; s < possibleChars[8].length; s++) {
                            arr[8] = (possibleChars[8][s]);
                            for (var t = 0; t < possibleChars[9].length; t++) {
                              arr[9] = (possibleChars[9][t]);
                              str = arr.join('');
                              possibleStrs.push(str);
                            }
                          }
                        }
                      } else {
                        str = arr.join('');
                        possibleStrs.push(str);
                      }

                    }
                  } else {
                    str = arr.join('');
                    possibleStrs.push(str);
                  }

                }
              }
            } else {
              str = arr.join('');
              possibleStrs.push(str);
            }

          }
        } else {
          str = arr.join('');
          possibleStrs.push(str);
        }

      }
    }
  }

  return possibleStrs;

}
