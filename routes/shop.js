const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop_controller');
const auth = require('../middleware/is_auth')

router.post('/add', shopController.postAddCart)
router.get('/', shopController.getShop)

module.exports = router;