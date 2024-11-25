const books = require('../models/books');
const BooksModel = require('../models/books');
module.exports = {
    getAllBooks: (req, res) => {
        BooksModel.find().then((book) => {
            console.log(book);
            return res.status(200).json(book);
        });
    },

    getBooksById: (req, res) => {
        BooksModel.find({ BookId: req.params.BookId }).then((book) => {
            return res.status(200).json(book);
        });
    },

    addNewBooks: (req, res) => {
        BooksModel.insertMany([req, body]).then((book) => {
            return res.status(200).json(book);
        });
    },

    updateBooksById: (req, res) => {
        BooksModel.updateMany({ BookId: req.params.BookId }, req.body).then((book) => {
            return res.status(200).json(book);
        });
    },

    deleteBooks: (req, res) => {
        BooksModel.deleteOne({ BookId: req.params.BookId }, req.body).then((book) => {
            return res.status(200).json(book);
        });

    }





};