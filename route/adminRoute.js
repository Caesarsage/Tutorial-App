const router = require('express').Router(),
      { makeTutor } = require('../authentification/adminAuth'),
      { token } = require('../authentification/token'),
      { auth } = require('../authentification/authorize');


router.post('/admin', [ token, auth("Tutor") ], makeTutor, (req, res)=>{
    res.send('Welcome to the Admin Portal!!!')
});

module.exports =router;