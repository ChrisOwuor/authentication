const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// create  a  user model
//we use mongoose to create the model
// create the schema of the  user the properties of the  user
const userSchema = new mongoose.Schema({
  name:{},
  email: {},
  password: {},
});

// mongoose hooks
// after saved to db
// userSchema.post("save", (doc, next) => {
//   console.log("new user created and saved");
//   next();
// });
// hook before document saved
// hash a password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// create a model based on the schema
const User = mongoose.model("user", userSchema);

module.exports = User;
