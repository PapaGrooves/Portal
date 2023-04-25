const mongoose = require("mongoose");
// Enables strictQuery globally
mongoose.set('strictQuery', true);
const conn = "mongodb+srv://PapaGrooves:PenguinSocks420@hospitalportalcluster.zznwmby.mongodb.net/Hospital?retryWrites=true&w=majority";

mongoose.connect(conn, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open0', function() {
    console.log('Connected to MongoDB Atlas')
});


module.exports = db;