export function initRandomBannerTexts() {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomBannerTexts = [];
  const n = window.innerWidth / 10;
  for (let i=0; i<n; i++) {
    randomBannerTexts.push({
      position: {
        top: getRandomInt(-20, 260) + "px",
        left: getRandomInt(-200, 2000) + "px",
      },
      text: _randomKloudText(),
    })
  }
  for (let i=0; i<n; i++) {
    randomBannerTexts.push({
      position: {
        top: getRandomInt(-20, 260) + "px",
        right: getRandomInt(-200, 2000) + "px",
      },
      text: _randomKloudText(),
    })
  }
  return randomBannerTexts;
}
function _randomKloudText() {
  const dict = {
    "chinese": "我們是雲",
    "danish": "vi er sky",
    "french": "nous sommes kloud",
    "russian": "мы облачны",
    "japanese": "私たちは大声で",
    "lithuanian": "mes esame debesys",
    "romanian": "suntem kloud",
    "norwegian": "vi er sky",
    "arabic": "نحن كلود",
    "spanish": "Nosotras somos kloud",
    "malay": "kami adalah kloud",
    "thai": "พวกเราคือ kloud",
    "ukranian": "ми хмари",
    "polish": "jesteśmy zachmurzeni",
    "german": "wir sind klau",
    "croatian": "mi smo oblak",
    "czech": "jsme kloud",
    "korean": "우리는 클라우드",
    "finish": "olemme pilvissä",
    "sinthi": "اسان ڪلائوڊ آهيون",
    "luxembourgish": "mir sinn kloud",
    "icelandic": "við erum skýjað",
    "dutch": "we zijn wolk",
    "greek": "είμαστε συννεφιασμένοι",
  };
  const values = Object.values(dict);
  if (Math.random() < 0.25) {
    // return "NFT music explorer"
    return "we are kloud"
  } else {
    return values[Math.floor(Math.random()*values.length)];
  }
}
