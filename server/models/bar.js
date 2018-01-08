var mongoose = require('mongoose');

var barSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "objectName": String,
  "property2": String,
  "rectColor": String,
  "chooseColor": String,
  "fontFamily": String,
  "fontSize": Number,
  "fontColor": String
})

module.exports = mongoose.model("Bar", barSchema);
