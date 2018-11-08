const Manga = require('../models/manga');
const populate = require('../models/populate');

exports.home_manga_list = (req, res) => {

    populate();
    
    Manga.find().exec((err, manga_list) => {
            if (err) { return next(err); }

            res.json( manga_list);
        });
};

exports.home_manga_detail = (req, res) => {

    Manga.findById(req.params.id).exec((err, manga_list) => {
        if (err) { return next(err); }
 
        res.json(manga_list);
    });
};   