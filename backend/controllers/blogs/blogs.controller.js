const BlogsModel = require("../../models/blogs/blogs.model");
const TagsModel = require("../../models/tags/tags.model");

const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogsModel.find().populate("tags");
    const blogsCount = await BlogsModel.find().count();
    res.json({
      data: blogs,
      total: blogsCount,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const findBlog = await BlogsModel.findOne({ _id: id });

    if (!findBlog) {
      return res.json({ message: "Blogs Is Not Found" });
    }

    res.json(findBlog);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const insertBlog = async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    if (!title || !description) {
      return res.json({ message: "Title Or Description Are Required" });
    }

    const findBlog = await BlogsModel.findOne({ title: title });
    const findTags = await TagsModel.find({ _id: tags });

    console.log(findTags);

    if (findBlog) {
      return res.json({ message: "Blogs Is Already Created" });
    }

    const newBlog = new BlogsModel({
      title: title,
      description: description,
      tags: findTags,
    });
    await newBlog.save();

    res.json({
      message: "Create Successfuly",
      data: newBlog,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const findBlog = await BlogsModel.findOne({ _id: id });

    if (!findBlog) {
      return res.json({ message: "Blogs Is Not Found" });
    }
    const editBlog = await BlogsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json({
      message: "Update Successfuly",
      data: editBlog,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteBlogs = async (req, res) => {
  try {
    const blogs = await BlogsModel.deleteMany();
    if (blogs.deletedCount == 0) {
      res.json({ message: "Blogs Is Not Found" });
    }

    res.json({
      message: "Delete Successfuly",
      deletedCount: blogs.deletedCount,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const findBlog = await BlogsModel.findOne({ _id: id });

    if (!findBlog) {
      return res.json({ message: "Blogs Is Not Found" });
    }

    const blog = await BlogsModel.deleteOne({ _id: id });

    res.json({
      message: "Delete Successfuly",
      data: blog,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};


module.exports = {
  getBlogs,
  getBlog,
  insertBlog,
  editBlog,
  deleteBlogs,
  deleteBlog,
};
