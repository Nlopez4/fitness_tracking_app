const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


// router.get("/", function (req, res) {
//   console.log(req.user, "index")
//   res.render("user", {
//     user: req.user,
//   });
// });



// GET /user
router.get('/', isLoggedIn, userCtrl.index);
router.post('/', isLoggedIn, userCtrl.create);
// router.get('/:id', isLoggedIn, userCtrl.show);
// router.get('/', isLoggedIn, userCtrl.newLog);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }





module.exports = router;


