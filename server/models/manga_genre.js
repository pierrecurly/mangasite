const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangeGenreSchema = new Schema({
    manga: {
        type: Schema.Types.ObjectId,
        ref: 'Manga'
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }
});

module.exports = mongoose.model('MangaGenre', MangeGenreSchema);