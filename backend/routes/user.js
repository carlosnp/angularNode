'user strict'

var express         = require('express');
var UserController  = require('../controllers/user');

var router = express.Router();

router.get('/test-controller', UserController.tests);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;
