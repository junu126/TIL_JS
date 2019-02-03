var express = require('express');
var User = require('../schemas/user');

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.render('mongoose', { users });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
