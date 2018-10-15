var Manga = require('../models/manga');

exports.home_manga_list = (req, res) => {

    Manga.find({})
        .populate('author category')
        .exec((err, list_books) => {
            if (err) { return next(err); }
            res.render('manga_list', { title: 'Manga List', manga_list: list_books });
        });
};   