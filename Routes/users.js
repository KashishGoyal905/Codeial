const express = require('express');

const router = express.Router();

const userController = require('../Controllers/users_controllers');
const postsController = require('../Controllers/posts_controllers');


router.get('/profile', userController.profile);
router.get('/posts', postsController.posts);

module.exports = router;    