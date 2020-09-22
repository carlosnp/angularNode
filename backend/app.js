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

// Rutas

module.exports = app;
