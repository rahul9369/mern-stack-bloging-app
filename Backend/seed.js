const mongoose = require("mongoose");
const Blog = require("./model");

const blogs = [
  {
    author: "Rahul",
    img: "https://images.unsplash.com/photo-1472405044831-bb7c502fd2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpZ2glMjByZXNvbHV0aW9uJTIwaW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    desc: "This is very nice img.",
  },
  {
    author: "Dimpal",
    img: "https://images.unsplash.com/photo-1469820518027-8d05935e1e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhpZ2glMjByZXNvbHV0aW9uJTIwaW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    desc: "This is very nice img.",
  },
  {
    author: "Ankur",
    img: "https://images.unsplash.com/photo-1523805725040-dee90be7fa2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhpZ2glMjByZXNvbHV0aW9uJTIwaW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    desc: "This is very nice img.",
  },
  {
    author: "Tinkal",
    img: "https://images.unsplash.com/photo-1609153315698-a0396f42fd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlnaCUyMHJlc29sdXRpb24lMjBpbWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    desc: "This is very nice img.",
  },
];

const seedDB = async () => {
  await Blog.insertMany(blogs);
  console.log("DB is seeded");
};

module.exports = seedDB;
