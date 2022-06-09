const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  {
    type: String,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  : {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  : {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  : [String]
});

const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = Pizza;
