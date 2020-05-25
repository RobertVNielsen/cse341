const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login_controller');

router.post('/login-attempt', loginController.login);
router.post('/logout', loginController.logout)
router.get('/', loginController.init);

module.exports = router;