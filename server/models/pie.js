var mongoose = require('mongoose');

var pieSchema = new mongoose.Schema({
  "userId": Number,
  "datasetId": Number,
  "datasetName": String,
  "objectName": String,
  "pieRadius": Number,
  "chooseRadius": Number,
  "pieColor": String,
  "chooseColor": String,
  "fontFamily": String,
  "fontSize": Number,
  "fontColor": String
})

module.exports = mongoose.model("Pie", pieSchema);
