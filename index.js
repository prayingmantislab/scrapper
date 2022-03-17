  const {getAllAlbanianNouns} = require ('./scrapper.js');   

async function start() {
  //scrape the wiki page for the albanian nouns
  const allbanianNouns = await getAllAlbanianNouns();
  console.log(allbanianNouns.length);
  //write a test that checks if the nouns are in the array

  // assert "abakë" in all_albanian_nouns
  // assert "zôjë" in all_albanian_nouns
  // assert len(all_albanian_nouns) > 3_900
}

start();