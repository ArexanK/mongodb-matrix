const express = require("express");
//import express from 'express'

const route = express.Router();
const controller = require("../controller/controller");
const postController = require("../controller/postController");
const userController = require("../controller/userController");
const deleteController = require("../controller/deleteController");
const commentController = require("../controller/commentController");

route.get("/", controller.getHomePage);
route.post("/data", controller.createNewUser);
route.get("/data/:id", controller.getUserId);
// route.post("/form/:id", controller.userInput);

route.post("/createPost", postController.newPost);
route.post("/add-user", userController.newUser);
route.post("/add-comment/:id", commentController.addComment);

// routes.get('/delete-post/:id', deleteController.deletePost)

module.exports = route;
// export default  route
