// import express from 'express'
//import mongoose from './config/mongoose.js'
const express = require("express");
require("./config/mongoose");
require("dotenv").config();
const app = express();
const PORT = 3200;
const postController = require("./controller/postController");

//EJS

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to parse the req body

//Routes
app.post("/save-Post", postController.savePost);
app.get("/get-all-posts", postController.getAllPosts);

//server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
