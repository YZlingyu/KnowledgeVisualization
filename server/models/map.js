var mongoose = require('mongoose');

var mapSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "addNode": String,
  "nodeRadius": Number,
  "nodeColor": String,
  "chooseColor": String
})

module.exports = mongoose.model("Map", mapSchema);
