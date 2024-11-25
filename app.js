require('dotenv').config();//הפעלת פונקיצה של נוט אי אן וי
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const booksRouuter = require('./api/v1/routes/books');
const borrowRouuter = require('./api/v1/routes/borrow');
const suppliersRouuter = require('./api/v1/routes/suppliers');
const usersRouuter = require('./api/v1/routes/users');
const mysql = require('mysql');
const session = require('express-session');
const privateKey = process.env.PRIVAT_KEY;
const MongoStore = require('connect-mongo');

//הגדרת בסיס נתונים מונגו
let mongoUser = process.env.MONGO_USER;
let mongoPass = process.env.MONGO_PASS;
let mongoServer = process.env.MONGO_SERVER;
let mongoDbName = process.env.MONGO_DBNAME;
const mongoConnStr = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/${mongoDbName}`;//לוודא את הדאטא שמקושר נכון
mongoose.connect(mongoConnStr);
var DB = mongoose.connection;//חיבור 


app.use(({
    secret: privateKey,
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        path: '/',
        secure: false,
        maxAge: 1000 * 60 * 20
    },
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/`
    })

}));



const auth = require('./api/v1/middlewares/auth');
const authS = require('./api/v1/middlewares/authS');
app.use(morgan('dev'));// הוספת השכבה דמורגן שמטפלת בתיעוד הבקדות בקונסול
app.use(cors());//הוספת שכבת הבייניפ שך קורס גישה ממקורות חיצוניים בפורמט אגקס
app.use(express.json());//שכבה המטפלת בפורמט גייסון
app.use(express.urlencoded({ extended: true }));//שכבה המטפלת בבקשות שנשלחו בפורמט יוארל אנקודד
app.use('')



app.all('*', (req, res) => {
    res.status(404).json({ msg: "not found 404" });
});

module.exports = app;