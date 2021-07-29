require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");

const morgan = require('morgan');

const bodyParser = require("body-parser");
const logger = require('morgan');
const router = express.Router();

/* ==== Internal Modules ==== */
const MongoClient = require('mongodb').MongoClient

//const morgan = require('morgan');

const session = require("express-session");
const passport = require("passport");
const router = express.Router();





/* ==== Internal Modules ==== */
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const excerRoute = require('./routes/workoutlog'); 
const durationRoute = require('./routes/duration');
const repsRoute = require('./routes/reps'); 
const workMod = require('./models/workoutlog');


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
 

// connect to the MongoDB with mongoose
require('./config/database');
require("./config/passport");

//passport middleware
  app.use(
    session({
      secret: "FitnessRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );
// Middleware
router.get("/", function (req, res) {
  res.get("index", {
    user: req.user,
  });
});

module.exports = router; 

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(logger('dev'));
app.use(express.static('public'));
app.use('/', router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

  app.use(passport.initialize());
  app.use(passport.session());
  
// workout log 
app.use('/', excerRoute); 
  //welcome signin/log in page
  app.use('/', indexRoutes);
  //user lands in this page after logging in
  app.use('/', userRoutes);

// Server bind
app.get('/', function (req, res) {
    res.send('Welcome');
  });
 


app.listen(PORT, () => {
	console.log(`fitness tracking app is live at http://localhost:${PORT}`);
});

