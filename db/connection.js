const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/bathroom', {useNewUrlParser: true}, () => {
    console.log("CONNECTION YAY")
})

mongoose.Promise = Promise;
module.exports = mongoose;

