var mongoose = require('mongoose');

var datasetSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "nodeName": String,
  "property1": String,
  "property2": String,
  "relationNode": [],
  "relationship": String
})

module.exports = mongoose.model("Dataset", datasetSchema);
