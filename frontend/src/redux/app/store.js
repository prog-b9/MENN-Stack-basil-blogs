import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "../features/blogs/blogSlice";

export const store = configureStore({
  reducer: {
    [blogSlice.reducerPath]: blogSlice.reducer,
  },
  middleware: (getDefualtMiddleware) =>
    getDefualtMiddleware().concat(blogSlice.middleware),
});
