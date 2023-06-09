// routes/imageRoutes.js
const express = require("express");
const multer = require("multer");
const imageController = require("../controllers/imgController");

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Generate a unique name for the uploaded file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), imageController.uploadImage);
router.get("/", imageController.getImages);

module.exports = router;
