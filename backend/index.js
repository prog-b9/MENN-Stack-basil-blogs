const express = require("express");
const app = express();
// is active the .env
require("dotenv").config();
const port = process.env.PORT || 3001;
const cors = require("cors");
const connectDB = require("./db/db");
const BlogsRouter = require("./routes/blogs/blogs.route");
const TagsRouter = require("./routes/tags/tags.route");

const routes = [
  {
    path: "/api/blogs",
    elements: BlogsRouter,
  },
  {
    path: "/api/tags",
    elements: TagsRouter,
  },
];
////// import Funcation Connect Database //////
connectDB();

////// Middlewares //////
app.use(express.json());
app.use(cors());

////// Routes //////
routes.map((item) => {
  app.use(item.path, item.elements);
});

////// EndPoint Is Not Found //////
app.all("*", (req, res) => res.json({ message: "EndPoint Is Not Found" }));

////// App Listen //////
app.listen(port, () => console.log(`Server Is Working On PORT :: ${port}`));
