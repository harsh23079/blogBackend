const post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const { title, description, user } = req.body;
    const postData = new post({
      title,
      description,
      user,
      
    });
    const response = await postData.save();
    res
      .status(200)
      .json({ data: response, message: "sucessfully created..!!" });
  } catch (err) {
    res
      .status(500)
      .json({ data: err.message, message: "internal server problem" });
  }
};

module.exports = createPost;
