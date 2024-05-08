// import { express } from "express";
const express = require("express");
const morgan = require("morgan");
const Blog = require("../models/blog");
const app = express();
const dbURI = "mongodb+srv://shivangkumar1857:PE6Pk2LbHL.BEQ@blog-db.kmhjijg.mongodb.net/?retryWrites=true&w=majority&appName=blog-db"
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

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  let blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  // let blogs = []
  res.render("index.ejs", { title: "Home", blogs });
  console.log("sent index.html");
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

app.get("/blogs", (req, res) => {
  res.render("create.ejs", { title: "Create a new blog" });
});
// 404

app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

// app.use is a middleware function that runs for every request
