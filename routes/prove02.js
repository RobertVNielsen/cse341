const express = require('express');
const router = express.Router();

const bookTitle = [];
const bookSummary = [];

router.post('/addBookInfo', (req, res, next) => {
    while (bookTitle.length > 0) {
        bookTitle.pop();
    }
    while (bookSummary.length > 0) {
        bookSummary.pop();
    }
    bookTitle.push(req.body.bookTitle);
    bookSummary.push(req.body.bookSummary);

    // console.log('prove: ', bookTitle);
    res.redirect('/bookInfo');
});

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove 02', 
        path: '/prove02', 
    });
});

//module.exports = router;
exports.routes = router;
exports.bookSummary = bookSummary;
exports.bookTitle = bookTitle;
