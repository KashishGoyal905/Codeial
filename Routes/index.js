const express = require('express');

// helps to separate route and controller routes
const router = express.Router();
// requiring home cotrollers
const homeController = require('../Controllers/home_controller');
const userController = require('../Controllers/users_controllers');


console.log('router loaded');

// home route // using controllers
router.get('/', homeController.home);
router.post('/create', userController.create);
router.get('/delete/:_id', homeController.delete);
// router.use('/create', require('./users'));


// exporting to main index.js file
module.exports = router;