const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MangaSchema = new Schema({
  title: String,
  summary: String,
  name: String,
  status: String,
  thumbnail: Buffer,
  chapter_count: String,
  views: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

MangaSchema.virtual('url').get(function () {
  return '/home/' + this._id;
});

module.exports = mongoose.model('MangaList', MangaSchema);