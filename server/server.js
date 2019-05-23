// const express = require('express');
// const app = express();
// require('dotenv').config();

// app.use(express.static(`${__dirname}/../build`));
// app.use(express.json());

const { SERVER_PORT } = process.env;

//web scraping
const request = require("request-promise"); //download web pages
const puppeteer = require("puppeteer");

const cheerio = require("cheerio"); //select different elements - similar to jquery (select by css selector)
//use the developer tool to see what you're trying to find in regards to CSS
// const rq = require('request');

//***************** Scrape Sample for Craigslist*****************/
// const scrapeSample = {
//   title: "Cozy home perfectly suited for you!",
//   description: "info about the apartment",
//   datePosted: new Date("2019-03-12"),
//   url:
//     "https://denver.craigslist.org/apa/d/englewood-cozy-home-perfectly-suited/6833612198.html",
//   hood: "(Denver Tech Center / Centennial)",
//   address: "10200 E Dry Creek Rd",
//   cost: "$1647/month"
// }; 

//***************** Scrape Sample for IABC*****************/

const scrapeSample = {
  name: 'John Doe',
  company: 'XYZ Company',
  address: '123 st',
  phone: '212-262-5655',
  site: 'www.site.com',
  twitter: '@twitterhandle'
}


const url = "https://toronto.iabc.com/about/pic/pic-member-list/";
const scrapeResults = [];

const scrapeSite = async () => {
  //function to take in html data (into string) of webpage into terminal
  try {
    const htmlResult = await request.get(url); //like an axios call but getting data from a URL
    const $ = await cheerio.load(htmlResult);

    $(".su-column-innter su-clearfix").each((index, element) => {
      console.log(element)
      const resultName = $(element).children(".su-row");
      console.log(resultName)
      // const resultHood = $(element).children(".result-meta").children(".result-hood");
      
      // const hood = resultHood.text();
      // const title = resultTitle.text();
      // const url = resultTitle.attr("href"); similar to jquery.
      // const datePosted = new Date($(element).children("time").attr("datetime"));
      // const scrapeResult = {title, url, datePosted, hood}; 
              //puts the results into an object for easier acesss.
      // scrapeResults.push(scrapeResult)
    });
    console.log(scrapeResults) 
  } catch (err) {
    console.error(err);
  }
};

scrapeSite();


// (async () => {
//     const browser = await puppeteer.launch({headless:false}); //used as an option to show GUI in Chromium instance
//     const page = await browser.newPage();
//     await page.setViewport({width: 1280, height: 800});
//     await page.goto('https://thaibui.run'); which page to scrape

    // await page.screenshot({path: 'filename.png', fullPage: true}) this is used to take page screen shots

    //This is to get the page source code.
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto('https://thaibui.run', {waitUntil: 'networkidle2'});
    // var html = await page.content 

    //you can get by selector using 
    // await page.waitForSelector('whatever the selector is')
    //then using vanilla javascript use
    // var repoLinks = '#user-repositories-list li h3 a';
    // var tmp = await page.evaluate(()=>{
    //     var repos = document.querySelectorAll(repoLinks); //this returns a node collection
    //     return Array.from(repos).map((repo)=>{return repo.href});
    // });

    //puppeteer can generate a pdf
    // await page.pdf({
    //     path: filename,
    //     format: 'Letter';
    //     margin: {
    //         top: "1in",
    //         bottom: "1in,
    //     }

    //figure out why puppeteer is different than Cheerio? WHat is hte best practice?

    // })

    // await browser.close(); close browser after the scrape has been completed //memory leak may occur if not closed.
// })()
// app.listen(SERVER_PORT, () => console.log(`IT'S OVER ${SERVER_PORT}`));

//Twitter Scraper:

// const tscraper = function (twitterUsername) {

//   const twitterUrl = 'https://twitter.com/' + twitterUsername;

//   request(twitterUrl, function(error, response, html) {

//     if (!error) {
//       const $ = cheerio.load(html);
//       const $wrapper = $('.ProfileHeaderCard');
//       const $new = $('.ProfileNav');
//       let name, username, bio, location, webpage, join_date, following, tweets, followers, likes;

//       name        = $wrapper.find('.ProfileHeaderCard-name a').first().text();
//       username    = $wrapper.find('.ProfileHeaderCard-screenname > a').first().text();
//       bio         = $wrapper.find('.ProfileHeaderCard-bio').first().text();
//       join_date   = $wrapper.find('.ProfileHeaderCard-joinDate .ProfileHeaderCard-joinDateText').first().text().replace('Joined','').substring(1);
//       tweets      = $new.find('.ProfileNav-item--tweets .ProfileNav-value').first().text();
//       following   = $new.find('.ProfileNav-item--following .ProfileNav-value').first().text();
//       followers   = $new.find('.ProfileNav-item--followers .ProfileNav-value').first().text();
//       likes       = $new.find('.ProfileNav-item--favorites .ProfileNav-value').first().text();

//       const userData = {
//         name: name,
//         username: username,
//         bio: bio,
//         join_date: join_date,
//         tweets:tweets,
//         following: following,
//         followers:followers,
//         likes:likes
//       };

//       console.log(userData);
//     }
//   });
// }

// tscraper(process.argv[2]);

// module.exports = {
//   tscraper
// }
