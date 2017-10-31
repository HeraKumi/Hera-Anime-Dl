const input = require('input')
const chalk = require('chalk')
const anime = require('anime-dl')

async function animeDownload() {
	const name = await input.text('What anime would you like to download?');
	const chapter = await input.text('And now what episode would you like to download')
	anime.getLinksByNameAndChapter(name, chapter).then(console.log)
}

animeDownload();