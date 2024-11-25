const borrow = require('../models/borrow');
const BorrowModel = require('../models/borrow');
module.exports = {
    getAllBorrow: (req, res) => {
        BorrowModel.find().then((Borr) => {
            console.log(Borr);
            return res.status(200).json(Borr);
        });
    },

    getBorrowById: (req, res) => {
        BorrowModel.find({ BorrowId: req.params.BorrowId }).then((Borr) => {
            return res.status(200).json(Borr);
        });
    },

    addNewBorrow: (req, res) => {
        BorrowModel.insertMany([req, body]).then((Borr) => {
            return res.status(200).json(Borr);
        });
    },

    updateBorrowById: (req, res) => {
        BorrowModel.updateMany({ BorrowId: req.params.BorrowId }, req.body).then((Borr) => {
            return res.status(200).json(Borr);
        });
    },

    deleteBorrow: (req, res) => {
        BorrowModel.deleteOne({ BorrowId: req.params.BorrowId }, req.body).then((Borr) => {
            return res.status(200).json(Borr);
        });

    }





};