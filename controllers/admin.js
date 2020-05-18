const Product = require('../models/product');
//const mongoose = require('mongoose')
// const Product = mongoose.model("Product", schema)

exports.getAddProduct = (req, res, next) => {
    Product
        .find()
        .then(products => {
            console.log("Displayed Products");
            console.log(products);
            res.render('pages/add', { 
                products: products,
                title: 'Interact with database', 
                path: '/add', // For pug, EJS 
                activeTA04: true, // For HBS
                contentCSS: true, // For HBS
            });
        })
        .catch(err => {
            console.log(err); 
        })
    
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    console.log(title);
    const product = new Product({
        title: title,
        price: price,
        description: description
    });
    product
        .save()
        .then(result => {
            console.log("Created Product");
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err); 
        })
}

exports.postEditProduct = (req, res, next) => {
    const oldTitle = req.body.oldtitle;
    const updatedTitle = req.body.utitle;
    const updatedPrice = req.body.uprice;
    const updatedDescription = req.body.udescription;
    Product
        .findOne({'title': oldTitle})
        .then(product => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDescription;
            return product.save();
        })
        .then(result => {
            console.log("Updated Product");
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err); 
        })
}

exports.postDeleteProduct = (req, res, next) => {
    const title = req.body.deletetitle;
    //console.log(title);
    Product
        .findOneAndRemove({'title': title})
        .then(result => {
            console.log("Deleted Product");
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err); 
        })
}