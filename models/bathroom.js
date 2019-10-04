const mongoose = require("../db/connection")

const bathroomSchema = new mongoose.Schema({
    location:{
        street: String,
        city: String,
        state: String,
        zipcode: Number,
        comments: String
    }
})

const myBathroom= mongoose.model("myBathroom", bathroomSchema)

module.exports = myBathroom;