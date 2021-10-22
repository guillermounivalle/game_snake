//Import modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use('/', require('./game_snake'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

module.exports = app;