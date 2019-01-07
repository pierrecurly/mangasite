const MangaList = require('../models/manga');
const populate = require('../models/populate');

exports.home_manga_updates = async function (req, res, next) {
    
    // populate();
    try {
        const manga_list = MangaList.find().populate('author')
        const manga_top = MangaList.find().sort('views').limit(5)

        await Promise.all([manga_list, manga_top])
            .then(function (result) {
                res.json({ mangaList: result[0], mangaTop: result[1]})
            })
    } catch (error) {
        return next(error);
    }
};

exports.home_manga_top = (req, res, next) => {

    MangaList.find().sort('views').exec((err, mangaTop) => {
        if (err) { return next(err); }
        res.json({ mangaTop });
    }); 
};
 
exports.home_manga_list = (req, res, next) => {

}

exports.home_manga_detail = (req, res, next) => {

    MangaList.find({ name: req.body.name }).populate('author').exec((err, mangaDetail) => {
        if (err) { return next(err); }
        console.log(mangaDetail);
        res.json({ mangaDetail });
    });
};

exports.home_manga_list_genre = (req, res, next) => {

}