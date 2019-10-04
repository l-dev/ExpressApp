const Bathrooms = require("../models/bathroom");
const seeds = require("./seeds.json");

Bathrooms.deleteMany({})
  .then(() => {
    return Bathrooms.insertMany(seeds);
  })
  .then(() => {
    console.log("DATA YAY");
    process.exit();
  });
