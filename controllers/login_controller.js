const User = require('../models/user');
const crypt = require('bcryptjs');

exports.init = (req, res, next) => {
    res.render('pages/login', { 
        //products: products,
        title: 'Login', 
        path: '/login', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
        errMessage: flash('failed')
    });
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;
    console.log(password)
    User.findOne({email:'nie16043@byui.edu'})
        .then(user => {
            console.log(user)
            if (!user) {
                req.flash('failed', "Invalid email or password");
                return res.redirect('/login');
            }
            
            crypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        req.session.user = user;
                        req.session.loggedIn = true;
                        return req.session.save(err => {
                            console.log(err);
                            console.log('1')
                            res.redirect('/admin');
                        })
                    }
                    console.log('2')
                    req.flash('failed', "Invalid email or password");
                    res.redirect('/login');
                })
                .catch(err => {
                    console.log(err); 
                });

            
        })
        .catch(err => {
            console.log(err); 
        })
    
}

exports.logout = (req, res, next) => {
    if (req.session.loggedIn == true) {
        req.session.loggedIn = false;
        res.redirect('/login');
    }
}