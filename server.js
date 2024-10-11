//server.js
//import express from "express";
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser"); //importing the body-parser to handle the json bodies or requests
const recipeRoutes = require("./routes/recipeRoutes");

//initialize environment variables
require("dotenv").config(); //it will load the environmental variables from the .env file
const app = express();

//middleware to parse the json
app.use(bodyParser.json());
//connect to the mongodb database
connectDB();

//routes
app.use("/api/recipes", recipeRoutes);
const PORT = process.env.PORT || 6666;
app.listen(PORT, () => {
    console.log("server is running at the url http://localhost:6666")
})