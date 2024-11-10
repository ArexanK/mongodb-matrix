const deleteModel = require("../model/deleteModel");

const deletePost = (req, res) => {
  deleteModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  deletePost,
};
