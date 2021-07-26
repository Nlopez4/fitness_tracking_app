require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const morgan = require('morgan');
const session = require("express-session");


//const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.get('/', function (req, res) {
    res.send('Welcome');
  });



//passportmiddleware
  app.use(
    session({
      secret: "FitnessRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );





app.listen(PORT, () => {
	console.log(`fitness tracking app is live at http://localhost:${PORT}`);
});

