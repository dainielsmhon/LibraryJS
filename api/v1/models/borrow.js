const mongoose = require('mongoose');//חיבור לספיירה מונגוס
mongoose.pluralize(null);//ביטול פנייה לטבלאות בלשון רבים באהגלית באוספת האות אס באנגלית אוטומטי
//הגדרת סכימה עבור האוסף borrow
var borrowSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    BorrowId: String,
    BookId: String,
    UserId: String,
    BorrowDate: Date,
    ReturnDatePlan: Date,
    ActualReturnDate: Date,
    Notse: String
});
module.exports = mongoose.model('borrow', borrowSchema)//יצירת חיבור borrow