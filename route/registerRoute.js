const router = require("express").Router(),
     { updateSubjectReg,
        deleteSubject,
        findSubject,
        registerSubject,} = require("../controller/registerController"),
        { token } = require("../authentification/token"),
        { auth} = require("../authentification/authorize");


router.post('/register', [token, auth("Tutor")], registerSubject);
router.get('/register', [token, auth("Tutor")], findSubject);
router.put('/register', [token, auth("Tutor")], updateSubjectReg);
router.delete('/register/:id',[token, auth("Tutor")], deleteSubject );


module.exports = router;