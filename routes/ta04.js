//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
//const adminController = require('../controllers/admin');

//router.get('/add-product', adminController.getAddProduct)

//router.post('/add-product', adminController.postAddProduct)
router.get('/',(req, res, next) => {
    res.render('pages/ta04', { 
        title: 'Team Activity 04', 
        path: '/ta04', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;