const mongoose = require('mongoose');
const Author = require('./author');
const MangaList = require('./manga');
const Genre = require('./genre');
const MangaGenre = require('./manga_genre');
const Schema = mongoose.Schema;

const mangaList = [
    {
        title: 'Noragami',
        summary: 'sdfgjhk...',
        status: 'On going',
        name: 'noragami',
        views: 1000000,
    }, 
    {
        title: 'One Piece',
        summary: 'Pirate King!@@',
        status: 'On going',
        name: 'onepiece',
        views: 1000001,
    }, 
    {
        title: 'Bleach',
        summary: 'Shinagami asdfsg....',
        status: 'On going',
        name: 'bleach',
        views: 1000002,
    },
    {
        title: 'Overlord',
        summary: 'Sorcerer King!!',
        status: 'On going',
        name: 'overlord',
        views: 1000003,
    }, 
    {
        title: 'Shokugeki No Soma',
        summary: 'luto luto xD',
        status: 'On going',
        name: 'shokugekinosoma',
        views: 1000004,
    }
];

const authorList = [
    {
        name: {
            firstName: 'test 1',
            lastName: 'test 1'
        }
    }, 
    {
        name: {
            firstName: 'test 2',
            lastName: 'test 2'
        }
    },
    {
        name: {
            firstName: 'test 3',
            lastName: 'test 3'
        }
    }, 
    {
        name: {
            firstName: 'test 4',
            lastName: 'test 4'
        }
    }, 
    {
        name: {
            firstName: 'test 5',
            lastName: 'test 5'
        }
    }, 
];

const genreList = [
    {
        genre: 'Action'
    },
    {
        genre: 'Fiction'
    },
    {
        genre: 'Romance'
    },
    {
        genre: 'Adventure'
    },
    {
        genre: 'Horror'
    },
];

const populate = () => {

    genreList.map((genre, i) => {
        let newGenre = new Genre(genre[i]);
        newGenre.save((err) => {
            if (err) throw err;
            console.log('Genre successfully saved.');
        });
    });

    setTimeout(() => {
        mangaList.map((manga, i) => {

            let newAuthor = new Author(authorList[i]);
            newAuthor.save((err) => {
                if (err) throw err;
                console.log('Author successfully saved.');
            });

            let newManga = new MangaList({
                _id: manga._id,
                title: manga.title,
                name: manga.name,
                status: manga.status,
                summary: manga.summary,
                views: manga.views,
                author: newAuthor._id
            });

            newManga.save((err) => {
                if (err) throw err;
                console.log('Manga successfully saved.');
            });

            for (let x = 0; x < 2; x++) {
                let random = Math.floor(Math.random() * 5)

                Genre.findOne().skip(random).exec((err, genre) => {

                    let newMangaGenre = new MangaGenre({ genre: genre._id, manga: newManga._id });
                    newMangaGenre.save((err) => {
                        if (err) throw err;
                        console.log('Genre successfully saved.');
                    });
                });
            }
        })

    }, 5000)
}

module.exports = populate;
