const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const TagsModel = mongoose.model("tags", tagSchema);

module.exports = TagsModel;
