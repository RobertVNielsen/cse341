const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin', {
        pageTitle: "Add Product",
        path: "pages/admin",
        editing: false
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body
    const price = req.body
    const description = req.body
    const product = new Product({
        title: title,
        price: price,
        description: description
    });
    product
        .save()
        .then(result => {
            console.log("Created Product");
            res.redirect('/')
        })
        .catch(err => {
            console.log(err); 
        })
}