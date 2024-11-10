// import express from 'express'
//import mongoose from './config/mongoose.js'
const express = require("express");
require("./config/mongoose");
require("dotenv").config();
const app = express();
const PORT = 3200;
const postController = require("./controller/controller");
const userData = require("./model/data");
const route = require("./config/routes");

//EJS
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse the req body

//Routes
app.use(route);
app.get("/users", (req, res) => {
  res.render("index", { user: userData });
});

//server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
