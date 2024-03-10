"use client";
import { blogPosts } from "@/components/home/Blogs";
import BlogViewCard from "@/components/blogs/BlogViewCard";
import { useRouter, redirect } from "next/navigation";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const BlogItem = ({ params }) => {
  const router = useRouter();

  const [dataBlogs, setDataBlogs] = useState(blogPosts[params?.blogId]);
  if (!dataBlogs) {
    redirect("/");
  }

  return (
    <div className="h-screen">
      <div className="container mt-10">
        <BlogViewCard props={dataBlogs} />
        <center className="mt-5">
          <Button className="bg-primaryColor" onClick={() => router.back()}>
            رجوع
          </Button>
        </center>
      </div>
    </div>
  );
};

export default BlogItem;
