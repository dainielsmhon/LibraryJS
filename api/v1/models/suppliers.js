const mongoose = require('mongoose');//חיבור לספיירה מונגוס
mongoose.pluralize(null);//ביטול פנייה לטבלאות בלשון רבים באהגלית באוספת האות אס באנגלית אוטומטי
//הגדרת סכימה עבור האוסף suppliers
var suppliersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Sid:String,
    Sname:String,
    SAddress:String,
    SWbe:String,
    SPhone:String,
    SEmail:String,
    Contact:String
});
module.exports = mongoose.model('suppliers', suppliersSchema)//יצירת חיבור suppliers