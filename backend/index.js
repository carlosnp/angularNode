'user strict'
console.clear();

const {colors} = require('./utils/color') ;

// Base de datos
var mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/angular_curso';
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },
  (err,res)=>{
  if (err) {
    console.log("Data Base Ok",err);
    throw err;
  }else{
    console.log(colors.fg.Green, "Success! Connet to Data Base... All Ok!");
  }
});
