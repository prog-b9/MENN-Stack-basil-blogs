import BlogCreateContainer from "@/components/blogs/BlogCreateContainer";
import React from "react";

const page = () => {
  return (
    <div className="container md:w-2/3 bg-white p-3 md:p-5 rounded-3xl">
      <div className="font-bold text-primaryColor text-3xl mb-4">إضافة مدونة جديدة</div>
      <BlogCreateContainer />
    </div>
  );
};

export default page;
