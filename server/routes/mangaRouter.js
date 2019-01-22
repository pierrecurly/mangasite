const express = require('express');
const mangaRouter = express.Router();
const manga_controller = require('../controllers/mangaController');

mangaRouter.post('/manga', manga_controller.home_manga_detail);

mangaRouter.get('/manga', manga_controller.home_manga_list);

export default mangaRouter