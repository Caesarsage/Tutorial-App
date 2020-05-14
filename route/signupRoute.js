const router = require('express').Router(),
      { SignUPStudent, SignUpTutor } = require('../controller/signupController');

router.post('/signup/student', SignUPStudent);

router.post('/signup/tutor', SignUpTutor);

module.exports = router 