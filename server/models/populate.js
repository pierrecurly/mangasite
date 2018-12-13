const mongoose = require('mongoose');
const Author = require('./author');
const Manga = require('./manga');
const Schema = mongoose.Schema;

const mangaList = [
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Noragami',
        summary: 'sdfgjhk...',
        status: 'On going',
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        title: 'One Piece',
        summary: 'Pirate King!@@',
        status: 'On going',
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Bleach',
        summary: 'Shinagami asdfsg....',
        status: 'On going',
    },
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Overlord',
        summary: 'Sorcerer King!!',
        status: 'On going',
    }, 
    {
        _id: mongoose.Types.ObjectId(),
        title: 'Shokugeki No Soma',
        summary: 'luto luto xD',
        status: 'On going',
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
        let newManga = new Manga({
            _id: manga._id,
            title: manga.title,
            status: manga.status,
            summary: manga.summary
        });

        newManga.save((err) => {
            if (err) throw err;
            console.log('Manga successfully saved.');
        });
    })
}
module.exports = populate;
