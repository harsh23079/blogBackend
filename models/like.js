const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, maxLength: 15 },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  },
  { versionKey: false }
);
module.exports = mongoose.model("like", likeSchema);
