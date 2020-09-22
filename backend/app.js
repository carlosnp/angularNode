'user strict'
// Motor de la Aplicacion
const {colors} = require('./utils/color') ;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Rutas
var user_routes = require('./routes/user');

// Config Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Config Headers

// Rutas Base
app.use('/api/users', user_routes);

app.get('/api', function(req, res) {
  res.status(200).send({
    status: 200,
    messages:"Welcom",
    description: "Sequi aut vitae provident labore excepturi. Inventore sint voluptates. Magnam beatae suscipit illo eos voluptatum doloremque. Quibusdam temporibus adipisci aspernatur sit. Quia blanditiis voluptatum deleniti vel. Repellendus natus numquam.",
    routes:{
      user:"/api/users"
    }
  })
})

module.exports = app;
