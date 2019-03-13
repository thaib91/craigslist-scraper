const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

const {SERVER_PORT} = process.env;

//web scraping
const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

let users = [];

const options = {
    url:
}








app.listen(SERVER_PORT, () => console.log(`IT'S OVER ${SERVER_PORT}`));