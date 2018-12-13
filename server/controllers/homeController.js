const Manga = require('../models/manga');
const populate = require('../models/populate');
const unirest = require('unirest');

exports.home_manga_list = (req, res) => {

    // populate();
    
    // Manga.find().exec((err, manga_list) => {
    //     if (err) { return next(err); }

    //     res.json( manga_list);
    // });

    // These code snippets use an open-source library. http://unirest.io/nodejs
    unirest.get("https://doodle-manga-scraper.p.mashape.com/mangareader.net")
        .header("X-Mashape-Key", "odQw8pB4GomshPWIUhyq2Y2df0ytp1i70L5jsn0uG8JYXuVuIl")
        .header("Accept", "text/plain")
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
        });
};
 
exports.home_manga_detail = (req, res) => {

    Manga.findById(req.params.id).exec((err, manga_list) => {
        if (err) { return next(err); }
 
        res.json(manga_list);
    });
};

exports.home_manga_list_genre = (req, res) => {

}

exports.home_manga_detail = (req, res) => {

}