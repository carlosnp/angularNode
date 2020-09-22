'user strict'
console.clear();

const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  fg: {
   Black: "\x1b[30m",
   Red: "\x1b[31m",
   Green: "\x1b[32m",
   Yellow: "\x1b[33m",
   Blue: "\x1b[34m",
   Magenta: "\x1b[35m",
   Cyan: "\x1b[36m",
   White: "\x1b[37m",
   Crimson: "\x1b[38m"
  },
  bg: {
   Black: "\x1b[40m",
   Red: "\x1b[41m",
   Green: "\x1b[42m",
   Yellow: "\x1b[43m",
   Blue: "\x1b[44m",
   Magenta: "\x1b[45m",
   Cyan: "\x1b[46m",
   White: "\x1b[47m",
   Crimson: "\x1b[48m"
  }
 };

// Base de datos
var mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/angular_curso';
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },
  (err,res)=>{
  if (err) {
    console.error("Data Base Ok",err);
    throw err;
  }else{
    console.log(colors.fg.Green, "Success! Connet to Data Base... All Ok!");
  }
});
