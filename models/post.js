const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, maxLength: 15 },
    description: { type: String, required: true, maxLength: 100 },
    user: { type: String, required: true, maxLength: 15 },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "like" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  },
  { versionKey: false }
);
module.exports = mongoose.model("post", postSchema);
