'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
  number:String,
  name: String,
  duration: String,
  file:String,
  album:{
    type:Schema.ObjectId,
    ref:'Album'
  },
  extra:String
});

module.exports = mongoose.model('Song',SongSchema);
