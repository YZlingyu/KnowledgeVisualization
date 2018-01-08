var mongoose = require('mongoose');

var treeSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "lineColor": String,
  "fontFamily": String,
  "fontSize": Number,
  "fontColor": String
})

module.exports = mongoose.model("Tree", treeSchema);
