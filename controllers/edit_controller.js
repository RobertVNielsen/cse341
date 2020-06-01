const Product = require('../models/product');

exports.getEditProduct = (req, res, next) => {
    console.log(req.params.oldtitle)
    if (req.params.oldtitle == null)
        res.redirect("/admin")
    Product
        .findOne({title: req.params.oldtitle})
        .then(product => {
            //console.log("Displayed Products");
            //console.log(products);
            res.render('pages/edit_product', { 
                product: product,
                title: 'Update Product', 
                path: '/edit_product', // For pug, EJS 
                activeTA04: true, // For HBS
                contentCSS: true, // For HBS
            });
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