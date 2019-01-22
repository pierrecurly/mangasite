const express = require('express');
const genreRouter = express.Router();
const genre_controller = require('../controllers/genreController');

genreRouter.post('/', genre_controller.home_manga_detail);

export default genreRouter