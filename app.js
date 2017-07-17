// Include our packages in our main server file
const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      passport = require('passport'),
      config = require('./config/main'),
      cors = require('cors');

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Log requests to console
app.use(morgan('dev'));

// Connect to database
mongoose.connect(config.database);

require('./server/routes')(app);

module.exports = app;