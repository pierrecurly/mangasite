const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MangaSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  summary: String,
  status: String,
  thumbnail: Buffer,
  chapter_count: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: "Category"
  },
  // ratings: [
  //   {
  //     summary: String,
  //     detail: String,
  //     numberOfStars: Number,
  //     created: {
  //       type: Date,
  //       default: Date.now
  //     }
  //   }
  // ],
  created: {
    type: Date,
    default: Date.now
  }
});

MangaSchema.virtual("url").get(function () {
  return "/home/" + this._id;
});

module.exports = mongoose.model("Manga", MangaSchema);