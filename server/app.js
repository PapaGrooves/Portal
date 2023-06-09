require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
const imgRoutes = require("./routes/imgRoutes");
const mongoSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
};

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD", "PATCH"],
  credentials: true,
};

app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/users", usersRoutes);
app.use("/uploads", express.static("uploads"));
app.use(express.static("uploads"));

app.use("/api/uploads", imgRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to database
mongoose
  .connect(process.env.MONGO_URI, mongoSettings)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
