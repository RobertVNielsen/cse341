const express = require('express');
const router = express.Router();
const createAccountController = require('../controllers/create_account_controller');

router.post('/create', createAccountController.create);

router.get('/', createAccountController.signup);

module.exports = router;