const router = require('express').Router();


router.get('/', (req, res)=>{
    return res.send('Welcome!!!');
});

module.exports = router;