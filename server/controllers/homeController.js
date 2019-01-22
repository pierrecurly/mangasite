const MangaList = require('../models/manga');
const GenreList = require('../models/genre');
const MangaGenre = require('../models/manga_genre')
const populate = require('../models/populate');

exports.home_manga_updates = async function (req, res, next) {
    
    //populate();
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

exports.home_manga_detail = async (req, res, next) => {
    
    const manga = MangaList.findOne({ name: req.body.name }).populate('author');
    manga.then(mangaDetail => {
            return Promise.all([
                mangaDetail,
                MangaGenre.find({ manga: mangaDetail._id }).populate('genre')
            ]);
        }).then(result => {
            console.log(result);
            res.json({ mangaDetail: result[0], mangaGenre: result[1] });
        }).catch(err => next(err));

    // MangaList.find({ name: req.body.name }).populate('author').exec((err, mangaDetail) => {
    //     if (err) { return next(err); }
    //     console.log(mangaDetail);

    //     MangaGenre.find({ manga: mangaDetail[0]._id }).populate('genre').exec((err, mangaGenre) => {
    //         if (err) { return next(err); }
    //         console.log(mangaGenre);
    //         res.json({ mangaDetail, mangaGenre});
    //     });
    // });

    // try {
    //     const manga_list = MangaList.find({ name: req.body.name }).populate('author')
    //     const manga_genre = MangaList.find({ manga: manga_list._id})

    //     await Promise.all([manga_list, manga_genre])
    //         .then(function (result) {
    //             res.json({ mangaList: result[0], manga_genre: result[1] })
    //         })
    // } catch (error) {
    //     return next(error);
    // }
};

exports.home_manga_list_genre = (req, res, next) => {

    GenreList.find().exec((err, genres) => {
        if (err) { return next(err); }
        console.log(genre);
        res.json( { genre } )
    });
}