const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    is_admin: {
        type: Number,
        default: 0
    },
    doctor: {
        type: String,
    },
    medication: {
        type: String,
    },
    appointment: {
        type: String
    },
    filename: {
        type: String
    },
    imagePath: {
        type: String
    }


})

module.exports = mongoose.model("User", userSchema)