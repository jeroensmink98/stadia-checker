const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



/**
 * Import routes
 */
var stadiaRouter = require('./routes/stadia.routes');


var env = process.env;
var app = express();

env.PORT = 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


/**
 * Apply routes
 */
app.use('/stadia', stadiaRouter)

app.get('/', function(req, res, next) {
    res.json('server ok');
});

app.listen(env.PORT, () => {
    console.log(`App running on port ${env.PORT}.`);
});



module.exports = app;