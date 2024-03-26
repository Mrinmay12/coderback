import mongoose from "mongoose";
const Schema = mongoose.Schema
const UploadPost = Schema({


  createdAt: {
    type: Date,
    default: Date.now
  },

  post_title: String,
  description:String

});

const Post = mongoose.model('UploadPosts', UploadPost);
export default Post