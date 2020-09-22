'user strict'
console.clear();

const {colors} = require('./utils/color');
const {env} = require('./utils/env');
process.env = Object.assign(process.env, env);

// Servidor
var app = require('./app');
const hostname = process.env.APP_BACKEND || '127.0.0.1';
const port = process.env.PORT || 3900;

// Base de datos
var mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/angular_curso';
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true },
  (err,res)=>{
  if (err) {
    console.log("Data Base Ok",err);
    throw err;
  }else{
    console.log("Success! Connect to Data Base... All Ok!", colors.fg.Green);
    // Init server
    app.listen(port, hostname, function() {
      console.log("\nServer ready", colors.fg.Yellow);
      console.log(`Server running at http://${hostname}:${port}/`, colors.fg.Cyan);
    })
  }
});
