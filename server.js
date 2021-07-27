require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const bodyParser = require("body-parser");

/* ==== Internal Modules ==== */
const routes = require("./routes");
const MongoClient = require('mongodb').MongoClient
/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('Welcome');
  });
 

app.listen(PORT, () => {
	console.log(`fitness tracking app is live at http://localhost:${PORT}`);
});

