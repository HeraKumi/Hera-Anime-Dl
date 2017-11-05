const input = require('input');
const chalk = require('chalk');
const anime = require('anime-dl');
const boxen = require('boxen');

console.log(boxen("Welcome to Hera's Anime Download CLI console application", {padding: 1, margin: 1, borderStyle: 'double'}));


async function animeDownload() {
    const name = await input.text('What anime would you like to download? || ');
    const chapter = await input.text('And now what episode would you like to download || ')
    anime.getLinksByNameAndChapter(name, chapter).then((data)=>{
        console.log(chalk.green(data.urls));
    });
}

animeDownload();

/* 
const anime = require('anime-dl')

const query = 'boku no kanojo'
const results = await anime.searchAnime(query)

if (results.length > 0) {
    const name = results[0].name
    console.log(results[0])
    const chapter = '1'
    const data = await anime.getLinksByNameAndChapter(name, chapter)
}
 */
