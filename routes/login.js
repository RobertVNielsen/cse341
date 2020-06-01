const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login_controller');
const { check } = require("express-validator/check");
const User = require('../models/user');
const crypt = require('bcryptjs');

router.post(
    '/login-attempt',
    [
        check("email")
            .custom((value, {req}) => {
                return User.findOne({email: value})
                    .then(user => {
                        if (!user) {
                            throw new Error("Invalid email or password")
                        }
                        return true;
                    });
            })
    ],
    loginController.login);
router.post('/logout', loginController.logout)
router.get('/', loginController.init);

module.exports = router;