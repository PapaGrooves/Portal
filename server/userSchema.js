const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: String,
    fname: String,
    lname: String, 
    password: String, 
    rpassword: String, 
    dob: String,
    sex: String,
});


const user = mongoose.model('user', userSchema);



module.exports = user;