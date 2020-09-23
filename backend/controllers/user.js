'user strict'

const bcrypt    = require('bcrypt');
const User      = require('../models/user');
const Validator = require('validatorjs');
Validator.useLang('es');

// Reglas para validar los campos de un usuario
const rules = {
  first_name: 'required|min:3|string',
  last_name: 'required|min:3|alpha_num',
  email: 'required|email',
  password: 'required|min:8',
  role:'required|string',
  image:'string',
  extra:'string',
};
const names = {
  first_name: 'Nombre',
  last_name: 'Apellido',
  email: 'Correo electronico',
  password: 'Contraseña',
  role:'Role',
  image:'Imagen',
  extra:'Extra',
};
// Reglas para validar el login
const rulesLogin = {
  email: 'required|email',
  password: 'required|min:8',
};

function tests(req,res) {
  res.status(200).send({
    status: 200,
    message: 'Soluta possimus et et ut. Mollitia quia aut cum esse excepturi in ut alias. Ullam id occaecati tempora voluptatibus perferendis. Harum non provident maxime id quidem ex voluptatem optio nam. Eos vel quaerat accusamus eum voluptatibus aut iste a.'
  })
}
/*
* User Register
*/
function registerUser(req,res) {
  var user = new User();
  var params = req.body;
  params.role= 'ROLE_USER';
  // User
  user.first_name= params.first_name;
  user.last_name= params.last_name;
  user.email= params.email;
  user.role= params.role;
  user.image= params.image;
  user.extra= params.extra;
  // Validation
  let validation = new Validator(params, rules);
  validation.setAttributeNames(names);

  if (validation.passes()) {
    // Se crea el hash para la contraseña
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    user.password = bcrypt.hashSync(params.password, salt);
    // Se procede a guardar al usuario
    user.save((err, userSave)=>{
      if (err) {
        res.status(500).send({
          status:500,
          message:"Error al guardar el usuario"
        });
      } else if(!userSave){
        res.status(404).send({
          status:404,
          message:"No se ha registrado el usuario"
        });
      } else{
        res.status(200).send({
          status:200,
          data:userSave
        });
      }
    });
  } else if (validation.fails()){
    res.status(400).send({
      error:validation.errors.all()
    })
  }
}
/*
* Login User
*/
function loginUser(req,res) {
  var params = req.body;
  // Validation
  let validation = new Validator(params, rulesLogin);
  validation.setAttributeNames(names);
  if (validation.passes()) {
    UserFindOne(params, res);
  } else if (validation.fails()){
    res.status(400).send({
      error:validation.errors.all()
    })
  }
}
/*
* Find User by email and return user login
*/
function UserFindOne(params, res) {
  var email = params.email;
  var pássword = params.password;
  User.findOne({email:email.toLowerCase()}, (errUser, user)=>{
    if (errUser) {
      res.status(404).send({
        status:404,
        message:"user not found",
        checkIn:"NF"
      })
    } else if (!user){
      res.status(404).send({
        status:404,
        message:"user not found",
        checkIn:"NF"
      })
    } else if(user){
      console.log(user);
      bcrypt.compare(pássword, user.password, function(err, check) {
        if (!check) {
          res.status(404).send({
            status:404,
            message:"user not found",
            checkIn:"EP"
          })
        } else if(check){
          res.status(200).send({
            status:200,
            data:user,
          })
        }
      });
    }
  })
}


module.exports = {
  tests,
  registerUser,
  loginUser
}
