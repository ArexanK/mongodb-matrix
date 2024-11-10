const commentModel = require("../model/commentModel");
const postModel = require("../model/postModel"); // Import the post model

const addComment = (req, res) => {
  console.log("Post ID:", req.params.id);
  console.log("Form Data:", req.body);
  const postId = req.params.postId;

  // Ensure the required fields are present
  if (req.body.commentOnPost && postId) {
    // Build the comment body
    const commentBody = {
      commentOnPost: req.body.commentOnPost,
      post: postId,
    };

    // Create a new comment instance
    const newComment = new commentModel(commentBody);

    newComment
      .save()
      .then(() => {
        // Find the post to add the comment to
        return postModel.findById(postId);
      })
      .then((post) => {
        if (post) {
          post.comments.push(newComment._id); // Push the new comment ID to the post's comments array
          return post.save();
        }
      })
      .then(() => res.redirect("/"))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error adding comment");
      });
  } else {
    res.status(400).send("Comment or Post ID missing");
  }
};

module.exports = {
  addComment,
};
