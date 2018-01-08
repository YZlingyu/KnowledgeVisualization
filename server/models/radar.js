var mongoose = require('mongoose');

var radarSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "objectName": String,
  "gridRadius": Number,
  "nodeColor": String,
  "districtColor": String,
  "fontFamily": String,
  "fontSize": Number,
  "fontColor": String
})

module.exports = mongoose.model("Radar", radarSchema);
