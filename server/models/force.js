var mongoose = require('mongoose');

var forceSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "levelNum": Number,
  "nodeRadius": Number,
  "chooseRadius": Number,
  "Ralationship": String,
  "lineWidth": Number,
  "lineColor": String,
  "fontFamily": String,
  "fontSize": Number,
  "fontColor": String
})

module.exports = mongoose.model("Force", forceSchema);
