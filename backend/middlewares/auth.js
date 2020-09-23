'user strict'

var jwt     = require('jwt-simple');
var moment  = require('moment');
var secret  = '6ed08016-fff5-4439-9225-55af33456cb4'

/**
 * Verifica si el usuario esta autenticado
*/
exports.verifyAuth = function(req, res, next) {
  const headers = req.headers;
  var userLoad;
  console.log('headers',headers);
  if (!headers.authorization) {
    res.status(403).send({
      status:403,
      title:"Forbidden",
      message:"Usuario no autorizado",
      checkIn:"No tiene token"
    })
  } else {
    var token = headers.authorization.replace(/['"]+/g);
    console.log("token",token);

    try {
      userLoad = jwt.decode(token, secret);
      if (userLoad.expirate_date <= moment().unix()) {
        res.status(401).send({
          status:401,
          title:"Unauthorized",
          message:"Token ha expirado",
          checkIn:"Tiene token"
        })
      }
    } catch (error) {
      res.status(403).send({
        status:403,
        title:"Forbidden",
        message:"Token no valido",
        checkIn:"Tiene token"
      })
    }

  }
  req.user = userLoad;
  next();
}
