const express = require('express');

const router = express.Router();
// requiring home cotrollers
const homeController = require('../Controllers/home_controller');


console.log('router loaded');

// home route // using controllers
router.get('/', homeController.home);
router.get('/about', homeController.about);




module.exports = router;