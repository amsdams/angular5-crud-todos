var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', TodoSchema);