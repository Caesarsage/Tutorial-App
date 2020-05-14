const router = require('express').Router(),
      { login } = require('../controller/authUser');

router.post('/login', login);


module.exports = router