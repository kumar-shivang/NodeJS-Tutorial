const express = require("express");
const router = express.Router();

const Blog = require("../models/blog");

router.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index.ejs", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      // res.send(err);
      console.log(err);
    });
});
router.post("/blogs", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blog.ejs", { title: result.title, blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
      // res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
