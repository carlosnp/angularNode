'user strict'

var bcrypt = require('bcrypt');
var User = require('../models/user');


// Validations
const notEmpy = /null|undefined|\s/gm;

function tests(req,res) {
  res.status(200).send({
    status: 200,
    message: 'Soluta possimus et et ut. Mollitia quia aut cum esse excepturi in ut alias. Ullam id occaecati tempora voluptatibus perferendis. Harum non provident maxime id quidem ex voluptatem optio nam. Eos vel quaerat accusamus eum voluptatibus aut iste a.'
  })
}

function registerUser(req,res) {
  var user = new User();
  var params = req.body;

  ValidateUser(params);

  user = {
    first_name: params.first_name,
    last_name: params.last_name,
    email: params.email,
    password: params.password,
    role: 'ROLE_USER',
    image: params.image,
    extra: params.extra,
  }

}

function ValidateUser(user) {
  var error = {
    status:422,
    messages:{}
  }

  if (user.password) {
    //
  } else if (user.password){
    error.messages.push({
      password: "La contraseña es requerida"
    })
  }
}


module.exports = {
  tests
}
