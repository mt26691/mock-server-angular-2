var express = require('express');
var router = express.Router();
var authController = require("../api/authController");

//login by username and password
router.post('/', authController.login);

//check user is logged in by access token
router.post('/isLoggedIn', authController.isloggedin);

module.exports = router;
