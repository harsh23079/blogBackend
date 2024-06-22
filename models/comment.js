const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, maxLength: 15 },
    body: { type: String, required: true, maxLength: 100 },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  },
  { versionKey: false }
);
module.exports = mongoose.model("comment", commentSchema);
