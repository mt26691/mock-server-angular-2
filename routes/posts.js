var express = require('express');
var router = express.Router();
var postController = require("../api/postController");

/* GET posts listing. */
router.get('/', postController.getPosts);

module.exports = router;
