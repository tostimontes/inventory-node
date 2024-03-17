const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.redirect('/dahsboard');
});

// TODO: redirect to each tenant dashboard on logging (later)

module.exports = router;
