const router = require('express').Router();
const passport = require("passport");
//const ctrl = require("../controllers");

router.get("/", function (req, res) {
  res.render("index", {
    user: req.user,
  });
});


router.post("/user", function (req, res) {
  res.render("user", {
    user: req.user,
  });
});



//asking google to take over
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

//this route will give us all the google info we need
  router.get(
    "/oauth2callback",
    passport.authenticate("google", {
        //if sucessfull this will take us to the workout log
      successRedirect: "/user",
      failureRedirect: "/",
    })
  );

//this route logs you out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

  

module.exports = router;
