// import { express } from "express";
const express = require("express");
const morgan = require("morgan");
const app = express();

app.listen(3000);
app.set("view engine", "ejs");

app.use(morgan("dev"));
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
