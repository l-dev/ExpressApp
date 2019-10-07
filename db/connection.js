const mongoose = require("mongoose")
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/bathroomapp";
  }
mongoose.connect('mongodb://localhost/bathroom', {useNewUrlParser: true}, () => {
    console.log("CONNECTION YAY")
})

mongoose.Promise = Promise;
module.exports = mongoose;

