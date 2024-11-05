const mongoose = require("mongoose");

const schema = mongoose.Schema;
const userSchema = new schema({
  userName: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
