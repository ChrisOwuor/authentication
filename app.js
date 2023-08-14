const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
// view engine
app.set("view engine", "ejs");

// database connection
const dburl = "mongodb://127.0.0.1:27017/node-auth";
mongoose
  .connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () => {
      console.log("connection successfull app listening on port 3000");
    })
  )
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);
