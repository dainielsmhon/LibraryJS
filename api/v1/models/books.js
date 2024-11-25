const mongoose = require('mongoose');//חיבור לספיירה מונגוס
mongoose.pluralize(null);//ביטול פנייה לטבלאות בלשון רבים באהגלית באוספת האות אס באנגלית אוטומטי
//הגדרת סכימה עבור האוסף books
var booksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    BookId: String,
    BookName: String,
    BookAuthor: String,
    Year: Date,
    BookDescription: String,
    BookLang: String,
    Location: String,
    Status: String,
    TakenDate: Date,
    ReturnDate: Date
});
module.exports = mongoose.model('books', booksSchema)//יצירת חיבור books