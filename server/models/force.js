var mongoose = require('mongoose');

var forceSchema = new mongoose.Schema({
  "dataset": String,
  "level": int,
  "userPwd": String,
  "dataList":[]
});

module.exports = mongoose.model("User", userSchema);
