const router = require('express').Router();


router.get('/', (req, res)=>{
    return res.send('Welcome To The Online Tutorial App!!!');
});

module.exports = router;