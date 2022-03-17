const fetch = require('node-fetch');
const cheerio = require('cheerio');
const axios = require('axios');

async function getAllAlbanianNouns() {
  let firstWord = 'aba';
  let totalNouns = [];
  https://en.wiktionary.org/w/index.php?title=Category:Albanian_nouns&pagefrom=${firstWord}#mw-pages
  try {
    while (true) {
      const URL_TEMPLATE = `https://en.wiktionary.org/w/index.php?title=Category:Albanian_nouns&pagefrom=${firstWord}#mw-pages`;
      const encodedUrl = encodeURI(URL_TEMPLATE)
      const { data } = await axios.get(encodedUrl);

      const $ = cheerio.load(data);
      const selector = '#mw-pages > div > div > div > ul > li > a ';
      const anchors = $(selector);
      const nouns = anchors.map((i, el) => $(el).text()).get();
      console.log(nouns)
      if (nouns.length === 1) {
        return;
      }

      const lastWord = [...nouns].pop();
      firstWord = lastWord;
      console.log(lastWord);
      totalNouns.push(...nouns);
    }
  } catch (e) {
    console.log(e);
  }
  return totalNouns;
}

module.exports = { getAllAlbanianNouns };
