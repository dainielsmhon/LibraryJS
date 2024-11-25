const suppliers = require('../models/suppliers');
const SuppliersModel = require('../models/suppliers');
module.exports = {
    getAllSuppliers: (req, res) => {
        SuppliersModel.find().then((supp) => {
            console.log(supp);
            return res.status(200).json(supp);
        });
    },

    getSuppliersById: (req, res) => {
        SuppliersModel.find({ Sid: req.params.Sid }).then((supp) => {
            return res.status(200).json(supp);
        });
    },

    addNewSuppliers: (req, res) => {
        SuppliersModel.insertMany([req, body]).then((supp) => {
            return res.status(200).json(supp);
        });
    },

    updateSuppliersById: (req, res) => {
        SuppliersModel.updateMany({ Sid: req.params.Sid }, req.body).then((supp) => {
            return res.status(200).json(supp);
        });
    },

    deleteSuppliers: (req, res) => {
        SuppliersModel.deleteOne({ Sid: req.params.Sid }, req.body).then((supp) => {
            return res.status(200).json(supp);
        });

    }





};