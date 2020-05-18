//const path = require('path')
const express = require('express');
const router = express.Router();

//const adminController = require('../controllers/admin');

//router.get('/add-product', adminController.getAddProduct)

//router.post('/add-product', adminController.postAddProduct)
console.log('first')
router.get('/' ,(req, res, next) => {
    console.log('second')
    res.render('pages/admin', { 
        title: 'Admin', 
        path: '/admin', 
    });
    console.log('third')
});

module.exports = router;