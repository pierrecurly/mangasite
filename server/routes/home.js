var express = require('express');
var homeRouter = express.Router();
var home_controller = require('../controllers/homeController');

homeRouter.get('/', home_controller.home_manga_list);

module.exports = homeRouter;