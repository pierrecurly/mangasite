const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

AuthorSchema.virtual('url').get(function () {
    return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);