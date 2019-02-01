var express = require('express');
var User = require('../models').User;

var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render('sequelize', { users });
  } catch (error) {
    console.log(error);
    next(error);
  }
})

module.exports = router;
