const router = require('express').Router();


router.get('/', (req, res)=>{
    return res.status(200).json('Welcome To The Online Tutorial App!!!');
});

module.exports = router;