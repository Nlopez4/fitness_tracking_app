// For workoutlog data
const express = require('express'); 
const router = express.Router();
const workoutCtrl = require('../controllers/workoutlog');

router.get("/", function (req, res) {
    res.render("index", {
      user: req.user,
    });
  });