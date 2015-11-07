

function MakeArray(n) {
  this.length = n;
  for (var i = 1; i <=n; i++) {
    this[i] = 0;
  }
}

function SetDecodes() {

  Decode = new MakeArray(101);
  DecodeMax = new MakeArray(10);
  Decode[11] = "1";
  DecodeMax[1] = 1;
  Decode[21] = "A";
  Decode[22] = "B";
  Decode[23] = "C";
  DecodeMax[2] = 3;
  Decode[31] = "D";
  Decode[32] = "E";
  Decode[33] = "F";
  DecodeMax[3] = 3;
  Decode[41] = "G";
  Decode[42] = "H";
  Decode[43] = "I";
  DecodeMax[4] = 3;
  Decode[51] = "J";
  Decode[52] = "K";
  Decode[53] = "L";
  DecodeMax[5] = 3;
  Decode[61] = "M";
  Decode[62] = "N";
  Decode[63] = "O";
  DecodeMax[6] = 3;
  Decode[71] = "P";
  Decode[72] = "R";
  Decode[73] = "S";
  DecodeMax[7] = 3;
  Decode[81] = "T";
  Decode[82] = "U";
  Decode[83] = "V";
  DecodeMax[8] = 3;
  Decode[91] = "W";
  Decode[92] = "X";
  Decode[93] = "Y";
  DecodeMax[9] = 3;
  Decode[101] = "0";
  DecodeMax[10] = 1;
}

function compute(form) {

  var count = 0;
  var Exchg3Var = form.Exchg3.value;
  var ValidNum = true;
  var i;
  var i1;
  var i2;
  var i3;
  var i4;
  var i5;
  var i6;
  var i7;
  var j;
  var j1;
  var j2;
  var j3;
  var j4;
  var j5;
  var j6;
  var j7;
  var Dial4Var = form.Dial4.value;
  var n;
  var PctCompTemp;

  SetDecodes();

  if (Exchg3Var.length!=3 || isNaN(Exchg3Var)) {

  alert ("This field must contain 3 numbers.");

  document.AlphaNum.Exchg3.select();

  document.AlphaNum.Exchg3.focus();

  ValidNum = false;

  }

  if (ValidNum) {

  if (Dial4Var.length!=4 || isNaN(Dial4Var)) {

  alert ("This field must contain 4 numbers.");

  document.AlphaNum.Dial4.select();

  document.AlphaNum.Dial4.focus();

  ValidNum = false;

     }

  }

  if (ValidNum) {

  form.AlphaResult.value = Exchg3Var+"-"+Dial4Var+"\n";

  form.AlphaResult.value += "--------\n";

  digit = new MakeArray(7);

  for (i = 1; i <=3; i++) {

  digit[i] = Exchg3Var.substring(i-1, i);

  }

  for (i = 1; i <=4; i++) {

  digit[i+3] = Dial4Var.substring(i-1, i);

  }

  if(digit[1]==0) {j1=10} else {j1=digit[1]}

  if(digit[2]==0) {j2=10} else {j2=digit[2]}

  if(digit[3]==0) {j3=10} else {j3=digit[3]}

  if(digit[4]==0) {j4=10} else {j4=digit[4]}

  if(digit[5]==0) {j5=10} else {j5=digit[5]}

  if(digit[6]==0) {j6=10} else {j6=digit[6]}

  if(digit[7]==0) {j7=10} else {j7=digit[7]}

  form.ComboCount.value = DecodeMax[j1]

  * DecodeMax[j2] * DecodeMax[j3]

  * DecodeMax[j4] * DecodeMax[j5]

  * DecodeMax[j6] * DecodeMax[j7];

  count = 0;

  for (i1=1;i1<=DecodeMax[j1]; i1++) {

  for (i2=1;i2<=DecodeMax[j2]; i2++) {

  for (i3=1;i3<=DecodeMax[j3]; i3++) {

  for (i4=1;i4<=DecodeMax[j4]; i4++) {

  for (i5=1;i5<=DecodeMax[j5]; i5++) {

  for (i6=1;i6<=DecodeMax[j6]; i6++) {

  for (i7=1;i7<=DecodeMax[j7]; i7++) {
    numStr = Decode[j1*10+i1];
    numStr += Decode[j2*10+i2];
    numStr += Decode[j3*10+i3];
    numStr += Decode[j4*10+i4];
    numStr += Decode[j5*10+i5];
    numStr += Decode[j6*10+i6];
    numStr += Decode[j7*10+i7];
    alphaNums.push(numStr);

  count+=1;

  form.ComputingCombo.value = count;

  PctCompTemp = count * 100 / form.ComboCount.value;

  form.PctComplete.value = Math.floor(PctCompTemp);

                          }

                       }

                    }

                 }

              }

           }

        }

     }

  else {

  form.AlphaResult.value = "Invalid entry. Nothing converted."

   }

}

