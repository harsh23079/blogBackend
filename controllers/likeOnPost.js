const Like = require("../models/like");
const Post = require("../models/post");

const likeOnPost = async (req, res) => {
  try {
    const { user, postId } = req.body;
    const likeObj = new Like({
      user,
      postId,
    });
    const savedLike = await likeObj.save();
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          likes: savedLike._id,
        },
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "post liked successfully", data: updatedPost });
  } catch (err) {
    res
      .status(500)
      .json({ message: "internal server error..!", data: err.message });
  }
};

module.exports = likeOnPost;
