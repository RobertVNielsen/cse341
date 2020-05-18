//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.post('/edit-product', adminController.postEditProduct)
router.post('/delete-product', adminController.postDeleteProduct)

router.post('/add-product', adminController.postAddProduct)

router.get('/', adminController.getAddProduct)


/*router.get('/',(req, res, next) => {
    res.render('pages/add', { 
        title: 'Interact with database', 
        path: '/add', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});*/

module.exports = router;