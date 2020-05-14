const router = require('express').Router(),
      { retrieveTutor,
        findOneTutor,
        findTutor,
        deactivateTutor} = require('../controller/tutorContoller'),
      { token } = require('../authentification/token'),
      { auth } = require('../authentification/authorize');


router.get('/tutor/:name', findTutor);

router.get('/tutor', [ token, auth('Admin') ] , retrieveTutor);

router.get('/tutor/user/:id', [ token, auth('Admin') ] , findOneTutor);

router.get('/tutor/:id', [ token, auth('Admin') ] , deactivateTutor);

module.exports = router