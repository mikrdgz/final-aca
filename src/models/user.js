const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    savedFoods:[String],
    isActive: Boolean
   
  });
var User = mongoose.model("User", userSchema);

  module.exports = User;