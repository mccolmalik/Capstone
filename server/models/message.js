const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  message: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Message = mongoose.model("Message", msgSchema);
module.exports = Message;
