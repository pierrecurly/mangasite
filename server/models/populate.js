const mongoose = require('mongoose');
const Author = require('./author');
const MangaList = require('./manga');
const Schema = mongoose.Schema;

const mangaList = [
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Noragami',
        summary: 'sdfgjhk...',
        status: 'On going',
        name: 'noragami',
        views: 1000000,
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        title: 'One Piece',
        summary: 'Pirate King!@@',
        status: 'On going',
        name: 'onepiece',
        views: 1000001,
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Bleach',
        summary: 'Shinagami asdfsg....',
        status: 'On going',
        name: 'bleach',
        views: 1000002,
    },
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Overlord',
        summary: 'Sorcerer King!!',
        status: 'On going',
        name: 'overlord',
        views: 1000003,
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Shokugeki No Soma',
        summary: 'luto luto xD',
        status: 'On going',
        name: 'shokugekinosoma',
        views: 1000004,
    }
];

const authorList = [
    {
        _id: mongoose.Types.ObjectId(),
        name: {
            firstName: '',
            lastName: ''
        }
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        name: {
            firstName: '',
            lastName: ''
        }
    },
    {
        _id: mongoose.Types.ObjectId(),
        name: {
            firstName: '',
            lastName: ''
        }
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        name: {
            firstName: '',
            lastName: ''
        }
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        name: {
            firstName: '',
            lastName: ''
        }
    }, 
];


const populate = () => {
    mangaList.map(manga => {
        let newManga = new MangaList({
            _id: manga._id,
            title: manga.title,
            name: manga.name,
            status: manga.status,
            summary: manga.summary,
            views: manga.views
        });

        newManga.save((err) => {
            if (err) throw err;
            console.log('Manga successfully saved.');
        });
    })
}
module.exports = populate;
