//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin_controller');
const auth = require('../middleware/is_auth')

router.post('/edit-product', auth, adminController.postEditProduct)
router.post('/delete-product', auth, adminController.postDeleteProduct)
router.get('/delete-product', auth, adminController.getDeleteProduct)

router.post('/add-product', auth, adminController.postAddProduct)

router.get('/', auth, adminController.getAddProduct)


/*router.get('/',(req, res, next) => {
    res.render('pages/add', { 
        title: 'Interact with database', 
        path: '/add', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});*/

module.exports = router;