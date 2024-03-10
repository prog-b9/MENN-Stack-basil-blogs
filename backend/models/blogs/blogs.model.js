const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tags",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const BlogsModel = mongoose.model("blogs", blogSchema);

module.exports = BlogsModel;
