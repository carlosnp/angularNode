'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
  name: String,
  description:String,
  image:String,
  extra:String
});

module.exports = mongoose.model('Artist',ArtistSchema);
