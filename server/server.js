const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

const {SERVER_PORT} = process.env;


app.listen(SERVER_PORT, () => console.log(`IT'S OVER ${SERVER_PORT}`))