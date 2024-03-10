const BlogsController = require("../../controllers/blogs/blogs.controller");
const route = require("express").Router();

route.get("/", BlogsController.getBlogs);
route.get("/:id", BlogsController.getBlog);
route.post("/", BlogsController.insertBlog);
route.put("/:id", BlogsController.editBlog);
route.delete("/", BlogsController.deleteBlogs);
route.delete("/:id", BlogsController.deleteBlog);

module.exports = route;
