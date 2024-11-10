const mongoose = require("mongoose");


const schema = mongoose.Schema;
const userSchema = new schema({
 userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

});


module.exports = mongoose.model("user", userSchema);