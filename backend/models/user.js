'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    trim: true,
    unique: true
  },
  password:String,
  role:String,
  image:String,
  extra:String,
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('User',UserSchema);
