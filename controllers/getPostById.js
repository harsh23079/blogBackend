const Post = require("../models/post");
const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Post.findById(id)
      .populate("comments")
      .populate("likes")
      .exec();
    res.send(response);
    res.status(200).json({ message: "successfully fetched by id" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "internal server error", data: err.message });
  }
};

module.exports = getPostById;
