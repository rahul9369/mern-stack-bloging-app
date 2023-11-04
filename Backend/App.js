const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const seedDB = require("./seed");
const blogRoutes = require("./route");
mongoose
  .connect("mongodb://127.0.0.1:27017/mernapp12345")
  .then(() => {
    console.log("Db  connected");
  })
  .catch((err) => {
    console.log("DB is not connected");
  });
app.use(express.json());
//seedDB();
app.use(blogRoutes);
app.listen(8080, () => {
  console.log("server started at port 8080");
});
