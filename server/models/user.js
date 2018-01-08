var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userId": Number,
  "userName": String,
  "userPwd": String,
  "dataList":[]
})

module.exports = mongoose.model("User", userSchema);
