const router = require('express').Router(),
      { subjectAddition,
        findAllSubject,
        deleteSubject,
        findSubject,
        findOneSubject,
        updateSubject,
        findTutorsForASubject} = require('../controller/subjectController'),
      { token } = require('../authentification/token'),
      { auth } = require('../authentification/authorize');

router.post('/subject', [token, auth('Admin')], subjectAddition);

router.get('/subject', [token], findAllSubject);

router.get('/subject/tutor/:id', [token, auth(['Admin', 'Student'])], findTutorsForASubject);

router.get('/subject/:id', [token], findOneSubject);

router.get('/subject/search/:name', [token], findSubject);

router.post('/subject/:id', [token, auth('Admin')], updateSubject);

router.post('/subject', [token, auth('Admin')], deleteSubject);

module.exports = router ;