const express = require('express');
const homeRouter = express.Router();
const home_controller = require('../controllers/homeController');

homeRouter.get('/', home_controller.home_manga_updates);

module.exports = homeRouter;