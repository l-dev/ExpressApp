const mongoose = require("../db/connection")

const bathroomSchema = new mongoose.Schema({
    
        street: String,
        city: String,
        state: String,
        zipcode: Number,
        comments: String,
        cords: {
                longitude: Number,
                latitude: Number
        }
    
})

const myBathroom= mongoose.model("myBathroom", bathroomSchema)

module.exports = myBathroom;