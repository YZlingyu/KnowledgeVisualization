var mongoose = require('mongoose');

var lineSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "objectName": String,
  "lineWidth": Number,
  "lineColor": String
})

module.exports = mongoose.model("Line", lineSchema);
