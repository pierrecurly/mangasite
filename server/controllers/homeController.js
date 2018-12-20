const MangaList = require('../models/manga');
const populate = require('../models/populate');

exports.home_manga_updates = async function (req, res, next) {
    try {
        const manga_list = MangaList.find()
        const manga_top = MangaList.find().sort('views').limit(5)

        await Promise.all([manga_list, manga_top])
            .then(function (result) {
                res.json({ mangaList: result[0], mangaTop: result[1]})
            })
    } catch (error) {
        return next(error);
    }
};

exports.home_manga_top = (req, res) => {

    MangaList.find().sort('views').exec((err, mangatop) => {
        if (err) { return next(err); }

        res.json({ mangatop });
    }); 
};
 
exports.home_manga_list = (req, res) => {

}

exports.home_manga_detail = (req, res) => {

    MangaList.findById(req.params.id).exec((err, manga_list) => {
        if (err) { return next(err); }
 
        res.json(manga_list);
    });
};

exports.home_manga_list_genre = (req, res) => {

}

exports.home_manga_detail = (req, res) => {

}