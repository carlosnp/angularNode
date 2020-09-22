'user strict'
// Motor de la Aplicacion
const {colors} = require('./utils/color') ;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Config Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Config Headers

// Rutas Base
app.get('/tests', function(req, res) {
  res.status(200).send({
    status: 200,
    messages:"Welcom",
    description: "Sequi aut vitae provident labore excepturi. Inventore sint voluptates. Magnam beatae suscipit illo eos voluptatum doloremque. Quibusdam temporibus adipisci aspernatur sit. Quia blanditiis voluptatum deleniti vel. Repellendus natus numquam."
  })
})
// Rutas

module.exports = app;
