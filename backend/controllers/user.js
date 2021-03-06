'user strict'

const bcrypt    = require('bcrypt');
const User      = require('../models/user');
const Validator = require('validatorjs');
const jwt       = require('../services/jwt');
const { json } = require('body-parser');
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
// Reglas para validar los campos a Actualiza
const rulesUpdate = {
  first_name: 'string|min:3',
  last_name: 'string|min:3',
  email: 'email',
  password: 'string|smin:8',
  role:'string',
  image:'string',
  extra:'string',
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
        console.log('err save', Object.assign({}, err));
        if (err.code == 11000) {
          res.status(400).send({
            status:400,
            message:"Error al guardar el usuario",
            error: Object.assign({},err)
          });
        } else {
          res.status(500).send({
            status:500,
            message:"Error al guardar el usuario"
          });
        }
      } else if(!userSave){
        res.status(404).send({
          status:404,
          title:"Not found",
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
      console.log('err login',Object.assign({}, errUser));
      res.status(404).send({
        status:404,
        title:"Not found",
        message:"user not found",
        checkIn:"NF"
      })
    } else if (!user){
      res.status(404).send({
        status:404,
        title:"Not found",
        message:"user not found",
        checkIn:"NF"
      })
    } else if(user){
      var userReturn = {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        image: user.image,
        extra: user.extra
      }
      bcrypt.compare(pássword, user.password, function(err, check) {
        if (!check) {
          res.status(404).send({
            status:404,
            title:"not found page",
            message:"user not found",
            checkIn:"EP"
          })
        } else if(check){
          if (params.gethash) {
            userToken = jwt.createToken(user);
            userReturn.token = userToken.token;
            userReturn.create_token = userToken.create_token;
            userReturn.expirate_token = userToken.expirate_token;
          }
          res.status(200).send({
            status:200,
            data:userReturn,
          })
        }
      });
    }
  })
}
/*
* Update User
*/
function updateUser(req,res) {
  var dataUser = req.body;
  dataUser.updated_at = new Date();
  // Validation
  let validation = new Validator(dataUser, rulesUpdate);
  validation.setAttributeNames(names);
  if (validation.passes()) {
    var userID = req.params.id !=undefined ? req.params.id : dataUser.id;
    if (userID) {
      User.findOneAndUpdate({_id: userID}, dataUser,
        {new: true, upsert: true}, (err, updateUser)=>{
        if (err) {
          console.log('Error update',Object.assign({}, err));
          res.status(500).send({
            status:500,
            message:"Error al actualizar el usuario",
            error: Object.assign({}, err)
          });
        } else if(!updateUser){
          res.status(404).send({
            status:404,
            title:"Not found",
            message:"No se ha actualizado el usuario"
          });
        } else{
          res.status(200).send({
            status:200,
            data:updateUser
          });
        }
      });
    } else {
      res.status(404).send({
        status:404,
        title:"Not found",
        message:"Debe enviar el ID del usuario"
      });
    }
  } else if (validation.fails()){
    res.status(400).send({
      error:validation.errors.all()
    })
  }
}

module.exports = {
  tests,
  registerUser,
  loginUser,
  updateUser
}
