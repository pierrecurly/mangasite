const express = require('express');
const homeRouter = express.Router();
const home_controller = require('../controllers/homeController');

homeRouter.get('/', home_controller.home_manga_updates);

homeRouter.get('/top', home_controller.home_manga_top);

homeRouter.post('/manga', home_controller.home_manga_detail);

homeRouter.get('/manga', home_controller.home_manga_list);

homeRouter.get('/manga/:genre', home_controller.home_manga_list_genre);


module.exports = homeRouter;