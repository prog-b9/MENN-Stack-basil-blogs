const TagsModel = require("../../models/tags/tags.model");

const getTags = async (req, res) => {
  try {
    const tags = await TagsModel.find();
    const tagsCount = await TagsModel.find().count();
    res.json({
      data: tags,
      total: tagsCount,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const insertTag = async (req, res) => {
  try {
    const { tag } = req.body;

    if (!tag) {
      return res.json({ message: "Tag Is Required" });
    }

    const findTag = await TagsModel.findOne({ tag: tag });

    if (findTag) {
      return res.json({ message: "Tag Is Already Created" });
    }

    const newTag = new TagsModel(req.body);
    await newTag.save();

    res.json({
      message: "Create Successfuly",
      data: newTag,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const editTag = async (req, res) => {
  try {
    const { id } = req.params;
    const findTag = await TagsModel.findOne({ _id: id });

    if (!findTag) {
      return res.json({ message: "Tags Is Not Found" });
    }
    const editTag = await TagsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json({
      message: "Update Successfuly",
      data: editTag,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteTags = async (req, res) => {
  try {
    const tags = await TagsModel.deleteMany();
    if (tags.deletedCount == 0) {
      res.json({ message: "Tags Is Not Found" });
    }

    res.json({
      message: "Delete Successfuly",
      deletedCount: tags.deletedCount,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteTag = async (req, res) => {
  try {
    const { id } = req.params;
    const findTag = await TagsModel.findOne({ _id: id });

    if (!findTag) {
      return res.json({ message: "Tags Is Not Found" });
    }

    const tag = await TagsModel.deleteOne({ _id: id });

    res.json({
      message: "Delete Successfuly",
      data: tag,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  getTags,
  insertTag,
  editTag,
  deleteTags,
  deleteTag,
};
