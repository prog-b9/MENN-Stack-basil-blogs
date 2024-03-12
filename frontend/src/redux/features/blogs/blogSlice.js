import { baseUrl } from "@/api/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogSlice = createApi({
  reducerPath: "blogs",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "blogss",
    }),
  }),
});

export const { useGetBlogsQuery } = blogSlice;
