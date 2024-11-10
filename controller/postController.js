const post = require("../model/postModel.js");

//create a post
const newPost = (req, res) => {
    console.log(req.body)
  const NewPost = new post(req.body);
  NewPost.save()
    .then(() => {
      res.redirect("/");
      console.log("post saved");
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = {
  newPost,
};

