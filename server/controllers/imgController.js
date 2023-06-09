// controllers/imageController.js
const Image = require("../models/imgModel");

exports.uploadImage = (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
  } else {
    console.log(req.file.filename);
    const image = new Image({
      filename: req.file.originalname,
      imagePath: `http://localhost:4000/uploads/${req.file.filename}`,
    });
    image.save((err, savedImage) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving image");
      } else {
        res.send("File uploaded successfully");
      }
    });
  }
};

exports.getImages = (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error retrieving images");
    }

    return res.json(images);
  });
};
