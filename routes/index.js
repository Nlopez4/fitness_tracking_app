const router = require('express').Router();
const passport = require("passport");

router.get("/", function (req, res) {
  res.render("index", {
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
      successRedirect: "/workoutlog",
      failureRedirect: "/",
    })
  );

//this route logs you out
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  







module.exports = router;
