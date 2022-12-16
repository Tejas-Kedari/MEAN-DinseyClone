// importing express application.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();

// Using cors and bodyParser in app
server.use(cors());
server.use(bodyParser.json())


module.exports = server;
