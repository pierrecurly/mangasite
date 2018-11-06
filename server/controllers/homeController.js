var Manga = require('../models/manga');

exports.home_manga_list = (req, res) => {

    let mangalist = [
        {
            id: 1,
            title: 'Boku no Hero',
            author: 'wa ko kaila',
            description: 'asdasdasdasdasdasd',
            data_added: '05-29-2010',
            status: '1',
            chapter_count: '269',
            categories: ['Action', 'Shounen'],
            img_url: ''
        },
        {
            id: 1,
            title: 'One Piece',
            author: 'Oda',
            description: 'pirate kng shit',
            data_added: '05-29-2010',
            status: '1',
            chapter_count: '700',
            categories: ['Action', 'Shounen', 'Adventure'],
            img_url: ''
        }
    ];

    res.json(mangalist);
    // Manga.find({})
    //     .populate('author category')
    //     .exec((err, list_books) => {
    //         if (err) { return next(err); }
    //         res.render('manga_list', { title: 'Manga List', manga_list: list_books });
    //     });
};   