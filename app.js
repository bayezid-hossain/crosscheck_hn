const express = require('express');
var bodyParser = require('body-parser');

const errorMiddleware = require('./middleware/error');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//Route Imports
const crossCheckRoute = require('./routes/crossCheckRoute');
app.use('/api/v1', crossCheckRoute);

//Middleware for errors
app.use(errorMiddleware);

module.exports = app;
