const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentOnPost: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  comment: {
    type: Schema.Types.ObjectId,
    minlength: 25,
    ref: "Comment",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
