'user strict'

var jwt     = require('jwt-simple');
var moment  = require('moment');
var secret  = '6ed08016-fff5-4439-9225-55af33456cb4'

/**
 * Funcion para crear el Token
*/
exports.createToken = function (user) {
  const today = moment();
  const expired_day = moment().add(30, 'days');
  var userLoad = {
    sub: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role,
    image: user.image,
    create_date: today.unix(),
    expirate_date: expired_day.unix()
  };
  var userToken = {
    token: jwt.encode(userLoad, secret),
    create_token: today.format('DD/MM/YYYY H:mm'),
    expirate_token: expired_day.format('DD/MM/YYYY H:mm'),
  }
  return userToken;
}
