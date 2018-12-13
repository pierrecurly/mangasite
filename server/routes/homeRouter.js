const express = require('express');
const homeRouter = express.Router();
const home_controller = require('../controllers/homeController');

homeRouter.get('/', home_controller.home_manga_list);

homeRouter.get('/manga/', home_controller.home_manga_list);

homeRouter.get('/manga/:genre', home_controller.home_manga_list_genre);

homeRouter.get('/manga/:id', home_controller.home_manga_detail);

module.exports = homeRouter;