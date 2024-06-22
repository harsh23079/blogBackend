const Like = require("../models/like");
const Post = require("../models/post");

const unLikeOnPost = async (req, res) => {
  try {
    const { postId, likeId } = req.body;

    const unLike = await Like.findByIdAndDelete({ _id: likeId });
    const post = await Post.findById({ _id: postId });
    if (!post.likes.includes(likeId))
      return res.status(404).json({ message: "like is done" });
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $pull: {
          likes: unLike._id,
        },
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "post unliked successfully", data: updatedPost });
  } catch (err) {
    res
      .status(500)
      .json({ message: "internal server error..!", data: err.message });
  }
};

module.exports = unLikeOnPost;
