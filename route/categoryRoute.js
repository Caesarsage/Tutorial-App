const router = require('express').Router(),
      { findAllCategory,
        deleteAllCategory,
        updateCategory,
        deleteCategory} = require('../controller/categoryController'),
      { token } = require('../authentification/token'),
      { auth } = require('../authentification/authorize');

router.get('/category', findAllCategory);

router.put('/category:id', [token, auth('Admin')], updateCategory);

router.delete('/category:id', deleteCategory);

router.delete('/category/delete', deleteAllCategory);

module.exports = router;