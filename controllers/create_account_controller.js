const User = require('../models/user');
const crypt = require('bcryptjs');

exports.signup = (req, res, next) => {
    res.render('pages/create_account', { 
        //products: products,
        title: 'Create Account', 
        path: '/create_account', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
}

exports.create = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({email: email})
        .then(userdoc => {
            console.log(userdoc)
            if (userdoc) {
                return res.redirect('/create_account');
            }
            return crypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword
                    })
                    return user.save();
                })
                .then(result => {
                    res.redirect('../admin');
                })
                
        })
        .catch(err => {
            console.log(err);
        });
        
    
    
}