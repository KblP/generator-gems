var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var citySchema = new Schema({
  name : {
    type: String,
    require: true
  },
  country : String
});

module.exports = mongoose.model('test', citySchema);