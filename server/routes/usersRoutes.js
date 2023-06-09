const express = require("express")

const { 
    getUsers, 
    getUser, 
    deleteUser, 
    updateUser, 
    loginUser, 
    signupUser 
} = require("../controllers/userController")

const router = express.Router()

// router.use(requireAuth)

// GET all users
router.get("/", getUsers)

// GET single user
router.get("/:id", getUser)

// DELETE user
router.delete("/:id", deleteUser)

// UPDATE user
router.patch("/:id", updateUser)

//login route
router.post("/login", loginUser)

// POST new user
router.post("/signup", signupUser)

module.exports = router