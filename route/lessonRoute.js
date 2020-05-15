const router = require('express').Router(),
      { getLesson,
        findAllLesson,
        bookLesson,
        updateLesson,
        deleteLesson } = require('../controller/lessonController'),
      { token } = require('../authentification/token'),
      { auth } = require('../authentification/authorize');

router.post('/lesson', [token, auth(['Admin', 'Student'])], bookLesson);

router.put('/lesson/:id', [token, auth('Admin')], updateLesson);

router.get('/lesson', [token, auth('Admin')], findAllLesson);

router.get('/lesson/:id', [token, auth('Admin')], getLesson);

router.delete('/lesson/:id', [token, auth('Admin')], deleteLesson);

module.exports = router