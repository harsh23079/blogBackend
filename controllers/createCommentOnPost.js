const comment = require("../models/comment");
const Post = require("../models/post");

const createCommentOnPost = async (req, res) => {
  try {
    const { user, body, postId } = req.body;
    const commentObj = new comment({
      user,
      body,
      postId,
    });
    const savedComment = await commentObj.save();
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: savedComment._id,
        },
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Comment created successfully", data: updatedPost });
  } catch (err) {
    res
      .status(500)
      .json({ message: "internal server error..!", data: err.message });
  }
};

module.exports = createCommentOnPost;
