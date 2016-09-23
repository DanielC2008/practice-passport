'use strict';

const { Router } = require('express');
const router = Router();
const User = require('../models/user');
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

router.post('/register', ({body: {email, password}}, res, error) => {
  User
  .create({
      email,
      password
    })
    .then(() => res.redirect('/login'))
    .catch(console.error);
})
/////////////////////////////////////////

module.exports = router;
