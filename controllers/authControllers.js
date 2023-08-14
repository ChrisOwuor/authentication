const User = require("../models/user");

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  const { email, password,name } = req.body;
  console.log(email, password,name);
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password,name } = req.body;
  // console.log(email,password);

  try {
    const user = await User.create({ email, password,name });
    res.json(user).status(201)
  } catch (error) {
    console.log(error);
    res.status(400).send("error");
  }
};

module.exports.login_post = (req, res) => {
  res.send("user login");
};
