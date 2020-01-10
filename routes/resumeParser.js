const express = require('express');
const router = express.Router();

/* POST receive resume. */
router.post('/', function(req, res, next) {
  console.log('Got body:', req)
});

module.exports = router;
