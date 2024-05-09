// import { express } from "express";
const express = require("express");
const morgan = require("morgan");
const Blog = require("../models/blog");
const blogRoutes = require("../routes/blogRoutes")
const app = express();
const dbURI =
  "mongodb+srv://shivangkumar1857:testpassword@blog-db.kmhjijg.mongodb.net/?retryWrites=true&w=majority&appName=blog-db";
const mongoose = require("mongoose");
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("database conntected");
    app.listen(3000);
    console.log("listening on port 3000");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
  // res.render("index.ejs", { title: "Home", blogs });
  // console.log("sent index.html");
});

app.get("/about", (req, res) => {
  // res.send("<h1>About Page</h1>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about.ejs", { title: "About" });
  console.log("sent about.html");
});

// redirecting
app.get("about-me", (req, res) => {
  res.redirect("/about");
});

app.get("/create", (req, res) => {
  res.render("create.ejs", { title: "Create a new blog" });
});

app.use(blogRoutes);
// 404

app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

// app.use is a middleware function that runs for every request
