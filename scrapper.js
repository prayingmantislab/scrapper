const fetch = require('node-fetch');
const cheerio = require('cheerio');

const URL = 'https://en.wiktionary.org/wiki/Category:Albanian_nouns';

export async function getAllAlbanianNouns(){
  debugger;
  const response = await fetch(URL);
  const $ = cheerio.load('<ul id="fruits">...</ul>');

  $.html();

  console.log(response);
  return [];
}
