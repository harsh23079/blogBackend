const Post = require("../models/post");
const getAllPost = async (req, res) => {
  try {
    const getData = await Post.find({})
      .populate("comments")
      .populate("likes")
      .exec();
    res.send(getData);
  } catch (err) {
    res
      .status(500)
      .json({ data: err.message, message: "internal server error..!!" });
  }
};
module.exports = getAllPost;
