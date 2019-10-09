const mongoose = require("mongoose");
mongoose.Promise = Promise;
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/bathroomapp";
  }
mongoose.connect(mongoURI, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
})
.catch(error => console.log("connection failed", error))
module.exports = mongoose;

