const express = require('express')
const router = express.Router();

router.use('/auth', require('./authRoute'));
router.use('/todo', require('./todoRoute'));


module.exports = router;
