const postModel = require("../model/postModel");

const savePost = (req, res) => {
  let newPost = new postModel(req.body);
  newPost
    .save()
    .then((post) => {
      console.log("post is saved");
    })
    .catch((err) => {
      throw err;
    });
};

const getAllPosts = (req, res) => {
   postModel.find()
      .then(posts => {
        res.send(posts)
      })
      .catch((err) => {
        throw err;
      });
  };

module.exports = {
  savePost,
  getAllPosts
};
