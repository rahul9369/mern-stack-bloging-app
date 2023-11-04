const express = require("express");
const router = express.Router();
const Blog = require("./model");

router.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  res.send(blogs);
});
router.post("/blogs", async (req, res) => {
  const blog = await Blog.create(req.body);
  res.send(blog);
});

router.get("/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.send(blog);
});
router.patch("/blogs/:id/edit", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.send(blog);
});

router.delete("/blogs/:id/delete", async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  res.send(blog);
});

module.exports = router;
