const data = require("../model/data.js");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const array = []; // should be database, but now temporarily storage

//home
const getHomePage = (req, res) => {
  res.status(200).send(data);
};

//form
// const userInput = (req, res) => {
//   console.log(req.params); //this prints out the param in url /form/:id
//   const { input } = req.body; // the input property of the form
//   array.push(input);
//   res.render("index", { user: data }); //renders the ejs template index
// };

const createNewUser = (req, res) => {
  const { name, createdAt, message } = req.body;

  if (!name || !createdAt || !message) {
    return res.status(400).json({ error: "required name and post" });
  } else {
    const id = uuidv4();
    const newUser = { id, name, createdAt, message };

    data.push(newUser);
    return res.status(201).json({ msg: "new user created" });
  }
};

const getUserId = (req, res) => {
  const id = req.params.id;

  for (const dataId of data) {
    if (dataId.id == id) {
      res.status(200);
      res.json(dataId);
      return;
    }
  }
  res.status(404).send({ error: "data does not exist" });
};

module.exports = {
  getHomePage,
  createNewUser,
  getUserId,
  // userInput,
};

//export default {getHomePage, createNewUser, getUserId, userInput}
