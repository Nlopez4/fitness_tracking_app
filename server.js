require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
//const morgan = require('morgan');
const session = require("express-session");
const passport = require("passport");
const indexRoutes = require('./routes/index');
//const userRoutes = require('./routes/user');


//const methodOverride = require("method-override");

/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */
const app = express();

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
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

  app.use(passport.initialize());
  app.use(passport.session());

  
  app.use('/', indexRoutes);
  //app.use('/', userRoutes);




app.listen(PORT, () => {
	console.log(`fitness tracking app is live at http://localhost:${PORT}`);
});

