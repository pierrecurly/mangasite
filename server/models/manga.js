var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MangaSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  latest_chapter: { type: String, required: true },
  chapter_count: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }]
});

MangaSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

module.exports = mongoose.model("Manga", MangaSchema);