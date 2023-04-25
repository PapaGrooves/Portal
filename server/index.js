const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./conn");
const userData = require("./userSchema");
const { connection } = require("mongoose");

// Configure middleware
app.use([
  bodyParser.urlencoded({ extended: false }), // Parse URL-encoded request bodies
  bodyParser.json() // Parse JSON request bodies
]);

app.use(
  cors({
    origin: true,
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH"], // Allow these HTTP methods
    credentials: true, // Enable sending and receiving of cookies with cross-origin requests
  })
);

console.log("howdy");


// Define a route for handling HTTP GET requests at the root path
app.get("/", (req, res) => {
  res.send("hellllllo"); // Respond with the text "hellllllo"
})

// Define a route for handling HTTP POST requests to create a new user
app.post("/signup", (req, res) => {
  console.log("signup running")

  const incoming = req.body; // Get the user data from the request body
  console.log(incoming);
  res.send("new user created") // Send a response back indicating that a new user has been created

    // Create a new user data object using the Mongoose schema
  const userPost = new userData({ 
    email: incoming.data.email, 
    fname: incoming.data.fname, 
    lname: incoming.data.lname, 
    password: incoming.data.password, 
    rpassword: incoming.data.rpassword, 
    dob: incoming.data.dob, 
    sex: incoming.data.sex 
  });

    // Save the new user data object to the database
  userPost.save(((err, savedDocument) => {
    if (err) {
      console.error('Error saving document', err);
    } else {
      console.log('Document saved successfully', savedDocument);
    }
  } ) 
  )
})


// Define a route for handling HTTP POST requests to authenticate a user
app.post("/login", async (req, res) => {
  const loginInputs = req.body.data; // Get the login credentials from the request body
  console.log(loginInputs);

  const userEmail = loginInputs.email; // Get the user's email address


  try {
    // Query the database to find the user's record
    const dbConn = await connection.db.collection("users").find().toArray();
    // console.log(dbConn);
    const findUser = dbConn.find((user) => user.email === userEmail); // Find the user record by email
    console.log(findUser);

    // Compare the entered password with the one in the database and send a response accordingly
    if (findUser.password === loginInputs.password) {
      res.send(findUser);
    } else {
      res.send("Wrong email or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error."); // Send an error response if there's an error
  }
})

// Start the server and listen for requests on port 4000
app.listen(4000, () => {
  console.log("port 4000");
})