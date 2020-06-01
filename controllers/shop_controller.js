const Product = require('../models/product');

exports.getShop = (req, res, next) => {
    Product
        .find()
        .then(products => {
            //console.log("Displayed Products");
            //console.log(products);
            if (!req.session.cart) 
                req.session.cart = [];
            res.render('pages/shop', { 
                products: products,
                cart: req.session.cart,
                title: 'Rob\'s Shop of Random Stuff', 
                path: '/shop', // For pug, EJS 
                activeTA04: true, // For HBS
                contentCSS: true, // For HBS
            });
        })
        .catch(err => {
            console.log(err); 
        })
}

exports.postAddCart = (req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }

    const title = req.body.title;
            //console.log(title);
    Product
        .findOne({'title': title})
        .then(product => {
            //console.log("Deleted Product");
            req.session.cart.push(product)
            res.redirect('/shop')
        })
        .catch(err => {
            console.log(err); 
        })
            
    
    //res.redirect('/');
}