const TagsController = require("../../controllers/tags/tags.controller");
const route = require("express").Router();

route.get("/", TagsController.getTags);
route.post("/", TagsController.insertTag);
route.put("/:id", TagsController.editTag);
route.delete("/", TagsController.deleteTags);
route.delete("/:id", TagsController.deleteTag);

module.exports = route;
