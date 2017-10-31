const input = require('input');
const anime = require('anime-dl');
const boxen = require('boxen');

console.log(boxen("Welcome to Hera's Anime Download CLI console application", {padding: 1, margin: 1, borderStyle: 'double'}));


async function animeDownload() {
	const name = await input.text('What anime would you like to download?');
	const chapter = await input.text('And now what episode would you like to download')
	anime.getLinksByNameAndChapter(name, chapter).then(console.log)
}

animeDownload();