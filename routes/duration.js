const express = require('express'); 
const router = express.Router();
const durationCtrl = require('../controllers/duration');

router.get('/', durationCtrl.index); 


 module.exports = router;  