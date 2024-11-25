const mongoose = require('mongoose');//חיבור לספיירה מונגוס
mongoose.pluralize(null);//ביטול פנייה לטבלאות בלשון רבים באהגלית באוספת האות אס באנגלית אוטומטי
//הגדרת סכימה עבור האוסף users
var usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserId: String,
    UserName: String,
    UserPass: String,
    Email: String,
    Phone: String,
    Adress: String,
    JoinDate: Date
});
module.exports = mongoose.model('users', usersSchema)//יצירת חיבור users