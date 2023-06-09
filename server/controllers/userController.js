const User = require("../models/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

const signupUser = async (req, res) => {
    try {
        const { email, fname, lname, password, rpassword, dob } = req.body;
        console.log(req.body)
        // Validation
        if (!email || !fname || !lname || !password || !rpassword || !dob  ) {
            throw new Error("All fields must be filled");
        }
        if (!validator.isEmail(email)) {
            throw new Error("Enter a valid email");
        }
        if (!validator.isStrongPassword(password)) {
            throw new Error("Use a stronger password");
        }

        const exists = await User.findOne({ email });

        if (exists) {
            throw new Error("Email already in use");
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({ email, fname, lname,  password: hash, rpassword, dob, });

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "An error occurred during signup", message: error });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validation
        if (!email || !password) {
            throw new Error("All fields must be filled");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Incorrect email or password");
        }

    
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            throw new Error("Incorrect email or password");
        }

        // Create token
        const token = createToken(user._id);

        console.log(user)
        res.status(200).json({ email, token, is_admin: user.is_admin, fname: user.fname, lname: user.lname, dob: user.dob, medication: user.medication, doctor: user.doctor, appointment: user.appointment, filename: user.filename, imagePath: user.imagePath });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
}
// get single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    res.status(200).json(user)
}
// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(400).json({ error: "User doesn't exist" })
    }

    res.status(200).json(user)
}
// update user
const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "User doesn't exist" });
    }

    const updatedUser = await User.updateOne({ _id: id }, req.body, { new: true });

    if (!updatedUser) {
        return res.status(400).json({ error: "User doesn't exist" });
    }

    res.status(200).json(updatedUser);
};

module.exports = { signupUser, loginUser, getUser, deleteUser, updateUser, getUsers };