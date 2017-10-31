# Hera-anime-dl
This is a simple but yet a maintained anime download CLI client for downloading anime


# Installing hera-anime-dl
* step 1: If you have installed node and npm (recommened latest version node 8) then you are fine, If you haven't installed node or npm I recommend using youtube to help you install it

* step 2: using git clone to download the repo: `git clone https://github.com/HeraKumi/Hera-anime-dl`

* step 3: Installing the dependencies need for hera-anime-dl to work `npm i -s`

* step 4: Running the app, cd or open the folder called main and run `node main.js` and if all as gone well you be greated with a welcome and questions, if not feel free to crate a ticket issue on github or by click [this](https://github.com/HeraKumi/Hera-anime-dl/issues) and creating a issue

# Basic Usage
`node main.js` this command should run the the app, If not you should report the problem to the dev [here](https://github.com/HeraKumi/Hera-anime-dl/issues).

You should now see a question asking you what anime you want to download, Choose a name for the anime you want to get a downlink from and press enter. Thus by pressing enter you should see a new quesion asking you to input a episode number, so input a episode number. Now that part is down wait a few seconds you should see something a output like this
``` 
{
  title: 'One Piece',
  codeName: 'one-piece',
  chapter: '732',
  urls: [
    'http://jkanime.net/stream/jkmedia/83b83090f08cbe7823cb0ed531f8cc72/0f40333b749a2a6d1bc5706accd73329/1/1de4451f8844a9c171830d25ff1cebbb/',
    'http://jkanime.net/stream/jkmedia/83b83090f08cbe7823cb0ed531f8cc72/4f501d26373b56e0fe0351c1a6154bd4/1/1de4451f8844a9c171830d25ff1cebbb/',
    'http://jkanime.net/stream/jkmedia/83b83090f08cbe7823cb0ed531f8cc72/ea38fc252cc488c0c1149875b8694f87/1/1de4451f8844a9c171830d25ff1cebbb/'
  ]
}
```
so here is the good part you see where says URLS? copy one fo the links to get the anime show you wanted and paste into a new tab in your browser and it should start downloading

The video will be downloaded into you're Downloads folder.