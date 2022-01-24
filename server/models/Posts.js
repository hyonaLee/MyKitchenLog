const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  postid: {
    type: Number,
  },
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  tag: {
    type: String,
  },
  contents: {
    type: String,
  },
  imgURL: {
    type: String,
  },
  favorite: {
    type: Boolean,
  },
});

const Posts = mongoose.model("Posts", postsSchema);
module.exports = { Posts };
