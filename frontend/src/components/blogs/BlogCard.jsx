"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const BlogCard = ({ props, id }) => {
  const { title, description, tags } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/${id}`);
  };
  return (
    <div
      className="bg-primaryColor/20 rounded-2xl p-3 md:p-5 cursor-pointer hover:scale-105 transition-all duration-150 relative"
      onClick={handleClick}
    >
      {/* title */}
      <h2 className="text-lg sm:text-xl text-primaryColor font-bold mb-2">
        {title}
      </h2>
      {/* description */}
      <p className="text-descColor mb-4 text-sm">{description}</p>
      {/* tags */}
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((item, i) =>
          i < 2 ? (
            <li
              key={i}
              className="text-xs bg-secondColor/20 p-1 px-2 rounded-full border border-secondColor text-secondColor font-bold"
            >
              {item.tag}
            </li>
          ) : null
        )}
      </ul>
      {/* btn arrow*/}
      <div className="bg-primaryColor/20 rounded-full p-1 inline-block float-left mt-2">
        <MdOutlineKeyboardDoubleArrowLeft
          size={25}
          className="text-primaryColor"
        />
      </div>
    </div>
  );
};

export default BlogCard;
