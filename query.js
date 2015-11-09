// var wordList = require('./make10LetQueryArr');

var request = require('request');




function searchByString(query) {

  var url = "https://www.google.com/voice/setup/search/?c&q=" + query + "&start=0&country=US";
  var cookie = "gv=DQAAABkBAADgUIdLc7vB1g7r2oXEMm4CYcL_NeLYp4gCzqbOegECHulT4R0dxcefcwnJC4RY-v8F6FhEo1XSeYZVN7S3PmyUmaU2O8d0nBPmoTrWWkJYLGst_8gKYtQka9vYu5vvCgE9htqokdsodmlxItK1-RYus1zVYeaCMV3lCCioTRZYmgQ4lQlsKRpDbPxDEHkEdr5vz70Yyb0y8S8Cvm1BMUJaFvVW3R2DjIr8gKOOnlMCzUHNOWgQHaPDxrlyptCpfIKjyafV6JrDIf0Jbj_brrCAMT-yfXvpcFWA5_o5osVGVnPaybnE5XqVW2-P-sU5fZhI6HTkCkdAjbth_aRDn-XayfFx0zhtRW-kxqATV34cK7fb3AR9VNE-Jkea1_Xkb7w; _ga=GA1.1.2134021519.1442447468; HSID=At4T6jEEGtvyfvkP4; SSID=AJUt4wUp-9i2kzboO; APISID=Th0k8ErJ_l631UmH/AP4j6B82R6LEonKoK; SAPISID=wL25eZhKjVjc4s0r/AZ02XEhK8Iud0RwGI; SID=DQAAABYBAAAVw0xqSBtfBUA6GT5tXcu_ulHIf8yk0PdnhrTV_QmazUR4wofi_Gh-RtqkF3FfUBlthAdsYF28FTgGG0OXJZT50aMx3iZOCMSG7-5qwUvASPtYm67vSPFZ_5dOIS4Sjt86Zq7wR50-U6XtOSGF99AYObP8Ne82vBptL5gVVCobjEzWqPByj0s0QmOOx1a99gbHvcRN-VHvqkIivmpqNqXI5z9R_tUf7kKHC5PYSN35o6fy0dTaIz5wFEKUdPh4sCQGgvxxW0ZBvruL7eZVcHuLu2TOLxmTrMyqTWfhQMqJulb-pRmcgHuba35i2h2x16xeOQVWNKH3LTCkfMYQ153Q5YIdys9X92ZL3KjpxRdcFuvgDbhe5r8X8pZ_Ts776yg; S=grandcentral=gRECo0wt2eZkF0tU0M9_pA; NID=73=IRQY2AH-d6ctwHuUVKFa-1u8LrgCmtjbYCgT-OPl6BiVirhDDPsN7roOB4niz86Fz2FDbY2GRtp---Z-nqgHjX7e6O711cn_-ZXnrEvPBSyxiMlmWZHL22MfoX28J5okbBGrLcjw9MdJqZFIrTj6ZOJtd5HANjWwxW3Q2-KSp3_pYU7HyeVuCb-lMw05XLzJIvkIehVYrvFBZGn8_Xo_bJW43onY2TtB4BLJQ54O8oJaNkbPpCf-MYsCWx0HEEiR5QYRKrxg-RTUYpPmEM1qZyTsyA; PREF=ID=1111111111111111:FF=0:LD=en:TM=1434671783:LM=1446870062:GM=1:SG=1:V=1:S=y9OdVwibSsA0nHPZ";

  var options = {
    url: url,
    headers: {
      'Referer': 'https://www.google.com/voice',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36',
      'cookie': cookie,
      'json': true
    }
  }

  var foundNums = [];

  request(options, callback);

}

if (res.JSON.num_matches !== "0") {
  foundNums.push(query);
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

// req headers

// :authority:www.google.com
// :method:GET
// :path:/voice/setup/searchnew/?c&q=7404693623&start=0&country=US
// :scheme:https
// accept:*/*
// accept-encoding:gzip, deflate, sdch
// accept-language:en-US,en;q=0.8,es;q=0.6
// cookie:gv=DQAAABkBAADt9jK5OmJ4CFdUAc6wu7wBxua-FZ45_ai_YAWWJJ2jnObhLtq0Ft1e01uCpBS3vCDT5fmhQGrLOpEoBbrP9No_RyFiate7TdzuWSSV-FC7orfeDH7Eecq8F8I6m6aeAU-hmePcG1bzhpm4dKrXqarNQ_JNwvyxgFmxWiXxf5ekRJJv8jG64DWb2SHTijyKKj0sERSk1tbuWKXvNQo4xay3rwnuiDnQaYWIjGdezv3knE-3VPvstnBZ_VEqePU9CE1Mt8-GEQoiMZKPR5wN8SEcTQooMGcPLpxBTbtnmYfAWVD6mYupklOAJVK0_GswRFBH2vMJDAK6JTkR1jJ_xhOy2ZAO1ILjRM9LDZMXzQh9nNL6uWAjMV2JfnqvuoVVu-Q; SID=DQAAABUBAACI3tyLIVf_2Jb_RU4DGzurM2iA11weWGipfEB7v_ahYBUVUi3GEvHL-aBYOpD1QaD3Ejl6zrJUGRJi0TnmW65W2jBP1YFofRmUFUlYrXxOq1OM3CCU4OGKfE71RKD063ocSJwLDqyZMnTJlzQJ9exu8dcvvl-w5p9DVPH-tZKCSF-LjeShIkFpPQvMzNccmBAmavgLNkyOWBUKowxG4x6QaMtZVe76St2GewkeT1mu5PjH3sxtxZb-HY8LZVqtudxN7fhIRd6j6c8jn3NIGERAqlU7BMQrTUhSfD7WCXfTjZ5u_ij68QG1ozwoR0u0n-SBb61L-mc4dx_6pf0sYYrSO8PHq4uGjbgFnGZOuidBDF5enH_iDycddOTYzSa-5iE; HSID=A01b3kCP3IMfCSDsS; SSID=AlWPzqVkveON-Mjz5; APISID=sJHLdX_1GWj3L_tw/ANEpvtsAV04lk1uZj; SAPISID=J7NFpyguH_dm4ROC/AQ3qnVoV0JYl4p9kK; PREF=ID=1111111111111111:FF=0:LD=en:TM=1428414739:LM=1446972871:GM=1:SG=1:V=1:S=-3j1E4enWmMbPXyi; S=grandcentral=LMlhmCe8GJE28FBCbKDCbg; NID=73=gsoQ4Ux0x7PViVy_oH9dulGBqYiSrUNr3uq2YfIryxM_Hw4jg3AzGQPp2juVm-HOYlz3VaxU6A9v7RrFTJf7cJE3mL0JN5GY8fIsTzpsn47Zz-4--iTIRAmv30iOxAamp9qlY4nmyz1BTVhW563LBuuVeb2QCWICJJLaVcuvykautxn8ncX79kzeFza5mS59lY3_mCTDAeFk96aWOy0yCSi4YCySXlSdcrYJloXfO2yU9XP3wEFFYXDI0ORTRIbqhCa0PUV-6uOK4ZsicJFzHRw
// dnt:1
// referer:https://www.google.com/voice
// user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36
// x-client-data:CKK2yQEIqbbJAQjBtskBCKCJygEI/ZXKAQi8mMoBCMeYygE=


