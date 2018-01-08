var mongoose = require('mongoose');

var heatmapSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "objectName": String,
  "blockColor": String
})

module.exports = mongoose.model("Heatmap", heatmapSchema);
