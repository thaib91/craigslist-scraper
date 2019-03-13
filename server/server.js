// const express = require('express');
// const app = express();
// require('dotenv').config();

// app.use(express.static(`${__dirname}/../build`));
// app.use(express.json());

const { SERVER_PORT } = process.env;

//web scraping
const request = require("request-promise"); //download web pages

const cheerio = require("cheerio"); //select different elements - similar to jquery (select by css selector)
//use the developer tool to see what you're trying to find in regards to CSS
// const rq = require('request');

const scrapeResult = {
  title: "Cozy home perfectly suited for you!",
  description: "info about the apartment",
  datePosted: new Date("2019-03-12"),
  url:
    "https://denver.craigslist.org/apa/d/englewood-cozy-home-perfectly-suited/6833612198.html",
  hood: "(Denver Tech Center / Centennial)",
  address: "10200 E Dry Creek Rd",
  cost: "$1647/month"
};

const url = "https://denver.craigslist.org/d/apts-housing-for-rent/search/apa";

const scrapeCraigslist = async () => {
  //function to take in html data (into string) of webpage into terminal
  try {
    const htmlResult = await request.get(url); //like an axios call but getting data from a URL
    const $ = await cheerio.load(htmlResult);

    $(".result-info").each((index, element) => {
      console.log(
        $(element)
          .children(".result-title")
          .text()
      );
    });
  } catch (err) {
    console.error(err);
  }
};

scrapeCraigslist();

// app.listen(SERVER_PORT, () => console.log(`IT'S OVER ${SERVER_PORT}`));
