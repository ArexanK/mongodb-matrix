const userModel = require("../model/userModel");

//create a post
const newUser = (req, res) => {
  console.log(req.body);
  let NewUser = new userModel(req.body);
  console.log(NewUser);
    NewUser.save()
      .then(() => {
        res.redirect("/");
        console.log("new user is added");
      })
      .catch((err) => {
        console.log(err);
      });
};

module.exports = {
  newUser,
};
