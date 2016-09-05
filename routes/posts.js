var express = require('express');
var router = express.Router();
var postController = require("../api/postController");

/* GET posts listing. */
router.get('/', postController.getPosts);

router.get('/:id', postController.getPost);

router.post("/", postController.savePost);

router.delete("/:id", postController.delete);
module.exports = router;
