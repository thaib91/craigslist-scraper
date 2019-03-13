// const express = require('express');
// const app = express();
// require('dotenv').config();

// app.use(express.static(`${__dirname}/../build`));
// app.use(express.json());

const {SERVER_PORT} = process.env;

//web scraping
const request = require('request-promise'); //download web pages

const cheerio = require('cheerio'); //select different elements
// const rq = require('request');

const url = "https://denver.craigslist.org/d/apts-housing-for-rent/search/apa"

const scrapeCraigslist = async () => { //function to take in html data of webpage into terminal
    try{
        const htmlResult = await request.get(url); //like an axios call but getting data from a URL
        console.log(htmlResult)
    }catch (err){
        console.error(err)
    }
}

scrapeCraigslist()






// app.listen(SERVER_PORT, () => console.log(`IT'S OVER ${SERVER_PORT}`));