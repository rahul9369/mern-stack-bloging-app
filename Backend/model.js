const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
