const DBConn = require('../config/MySqlDb');
module.exports = {
    getAllBooks: (req, res) => {
        let Sql = "Select * from t_Books";
        DBConn.query(Sql, function (error, results, fields) {
            if (error)
                return res.status(500).json(error);
            return res.status(200).json(results);
        });

    },

    getBooksById: (req, res) => {
        let Sql = `Select * from t_Books where BookId=${req.params.BookId}`
        DBConn.query(Sql, (error, results, fields) => {
            if (error)
                return res.status(500).json(error);
            return res.status(200).json(results);
        });

    },

    addNewBooks: (req, res) => {
        let book = req.body;
        let Sql = `insert into t_Books (BookName) values ('${book.BookName}')`;
        DBConn.query(Sql, (error, results, fields) => {
            if (error)
                return res.status(500).json(error);
            return res.status(200).json(results);
        });

    },

    updateBooks: (req, res) => {
        let book = req.body;
        let sql = `update t_books set BookName ='${book.BookName}' where BookId=${req.params.BookId}`;
        DBConn.query(sql, (error, results, fields) => {
            if (error)
                return res.status(500).json(error);
            return res.status(200).json(results);
        });

    },
    deleteBooks: (req, res) => {
        let book = req.body;
        let sql = `delete from t_books where BookId =${req.params.BookId}`;
        DBConn.query(sql, (error, results, fields) => {
            if (error)
                return res.status(500).json(error);
            return res.status(200).json(results);

        });

    }


};