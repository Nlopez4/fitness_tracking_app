require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require('morgan');
const router = express.Router();

/* ==== Internal Modules ==== */
const MongoClient = require('mongodb').MongoClient
/* ==== Instanced Modules  ==== */
const app = express();


// Routes
const routes = require("./routes");
require('./config/database');

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 4000;
app.set("view engine", "ejs");


// Middleware

app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.static('public'));
app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));





// Server bind
app.get('/', function (req, res) {
    res.send('Welcome');
  });
 

app.listen(PORT, () => {
	console.log(`fitness tracking app is live at http://localhost:${PORT}`);
});

