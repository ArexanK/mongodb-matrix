const mongoose = require("mongoose");


const schema = mongoose.Schema;
const postSchema = new schema({
  postbody: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    minlength:25,
    required: false,
  },
});


module.exports = mongoose.model("Post", postSchema);