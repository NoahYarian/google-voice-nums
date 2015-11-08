var request = require('request');
// var nums615 = require('./nums.js');
var no01AreaCodes = [224, 225, 234, 248, 252, 256, 262, 267, 269, 276, 323, 334, 336, 337, 339, 352, 385, 386, 423, 424, 434, 435, 442, 443, 458, 469, 475, 478, 484, 539, 559, 562, 563, 567, 573, 574, 575, 585, 586, 626, 636, 657, 662, 667, 669, 678, 682, 724, 725, 727, 732, 734, 747, 754, 757, 762, 763, 765, 769, 772, 773, 774, 775, 779, 786, 828, 832, 843, 845, 847, 848, 856, 857, 858, 859, 862, 863, 864, 865, 872, 878, 925, 929, 936, 937, 938, 949, 954, 956, 973, 978, 979, 984, 985, 989];
var cookie = "gv=DQAAABkBAADgUIdLc7vB1g7r2oXEMm4CYcL_NeLYp4gCzqbOegECHulT4R0dxcefcwnJC4RY-v8F6FhEo1XSeYZVN7S3PmyUmaU2O8d0nBPmoTrWWkJYLGst_8gKYtQka9vYu5vvCgE9htqokdsodmlxItK1-RYus1zVYeaCMV3lCCioTRZYmgQ4lQlsKRpDbPxDEHkEdr5vz70Yyb0y8S8Cvm1BMUJaFvVW3R2DjIr8gKOOnlMCzUHNOWgQHaPDxrlyptCpfIKjyafV6JrDIf0Jbj_brrCAMT-yfXvpcFWA5_o5osVGVnPaybnE5XqVW2-P-sU5fZhI6HTkCkdAjbth_aRDn-XayfFx0zhtRW-kxqATV34cK7fb3AR9VNE-Jkea1_Xkb7w; _ga=GA1.1.2134021519.1442447468; HSID=At4T6jEEGtvyfvkP4; SSID=AJUt4wUp-9i2kzboO; APISID=Th0k8ErJ_l631UmH/AP4j6B82R6LEonKoK; SAPISID=wL25eZhKjVjc4s0r/AZ02XEhK8Iud0RwGI; SID=DQAAABYBAAAVw0xqSBtfBUA6GT5tXcu_ulHIf8yk0PdnhrTV_QmazUR4wofi_Gh-RtqkF3FfUBlthAdsYF28FTgGG0OXJZT50aMx3iZOCMSG7-5qwUvASPtYm67vSPFZ_5dOIS4Sjt86Zq7wR50-U6XtOSGF99AYObP8Ne82vBptL5gVVCobjEzWqPByj0s0QmOOx1a99gbHvcRN-VHvqkIivmpqNqXI5z9R_tUf7kKHC5PYSN35o6fy0dTaIz5wFEKUdPh4sCQGgvxxW0ZBvruL7eZVcHuLu2TOLxmTrMyqTWfhQMqJulb-pRmcgHuba35i2h2x16xeOQVWNKH3LTCkfMYQ153Q5YIdys9X92ZL3KjpxRdcFuvgDbhe5r8X8pZ_Ts776yg; S=grandcentral=gRECo0wt2eZkF0tU0M9_pA; NID=73=IRQY2AH-d6ctwHuUVKFa-1u8LrgCmtjbYCgT-OPl6BiVirhDDPsN7roOB4niz86Fz2FDbY2GRtp---Z-nqgHjX7e6O711cn_-ZXnrEvPBSyxiMlmWZHL22MfoX28J5okbBGrLcjw9MdJqZFIrTj6ZOJtd5HANjWwxW3Q2-KSp3_pYU7HyeVuCb-lMw05XLzJIvkIehVYrvFBZGn8_Xo_bJW43onY2TtB4BLJQ54O8oJaNkbPpCf-MYsCWx0HEEiR5QYRKrxg-RTUYpPmEM1qZyTsyA; PREF=ID=1111111111111111:FF=0:LD=en:TM=1434671783:LM=1446870062:GM=1:SG=1:V=1:S=y9OdVwibSsA0nHPZ";
var nums = [];
var options;

function makeUrl (areaCode, pageNum) {
  var start = pageNum * 5;
  console.log("making URL for page " + pageNum);
  var url = "https://www.google.com/voice/setup/search/?ac=" + areaCode + "&start=" + start + "&country=US";
  return url;
}

function callback(error, response, body) {
  var num;
  if (!error && response.statusCode == 200) {
    // console.log(response);
    // console.log(body);
    var info = JSON.parse(body);
    // console.log(info.JSON.vanity_info);
    for (key in info.JSON.vanity_info) {
      num = key.split('');
      num.shift();
      num.shift();
      nums.push(num.join(''));
    }
    console.log(nums);
  }
}

for (var i = 0; i < 10; i++) {

  options = {
    url: makeUrl(615, i),
    headers: {
      'User-Agent': 'request',
      'cookie': cookie,
      'json': true
    }
  }

  request(options, callback);
}

