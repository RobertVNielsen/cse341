const express = require('express');
const router = express.Router();

const bookData = require('./prove02');

router.get('/',(req, res, next) => {
    console.log(bookData)
    res.render('pages/bookInfo', { 
        title: 'Book of the Day', 
        path: '/bookInfo', 
        bookTitle: bookData.bookTitle,
        bookSummary: bookData.bookSummary,
    });
});

module.exports = router;