'use strict';

const { Router } = require('express');
const router = Router();
/////////////////////////////////////////


/////////////////////////////////////////
//Routes
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/register', (req, res) => {
  res.render('register');
});



router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/register', (req, res) => {



});
/////////////////////////////////////////


module.exports = router;
