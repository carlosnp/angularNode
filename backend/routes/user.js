'user strict'

var express         = require('express');
var UserController  = require('../controllers/user');
var md_Auth         = require('../middlewares/auth');

var router = express.Router();

router.get('/test-controller', UserController.tests);
router.get('/test-middleware', md_Auth.verifyAuth, UserController.tests);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;
