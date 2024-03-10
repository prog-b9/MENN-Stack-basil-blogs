"use client";
const BlogViewCard = ({ props }) => {
  const { title, description, tags } = props;

  return (
    <div className="bg-primaryColor/20 rounded-2xl p-3 md:p-5">
      {/* title */}
      <h2 className="text-lg sm:text-3xl text-primaryColor font-bold mb-2">
        {title}
      </h2>
      {/* description */}
      <p className="text-descColor mb-4 text-sm">{description}</p>
      {/* tags */}
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((item, i) => (
          <li
            key={i}
            className="text-xs bg-secondColor/20 p-1 px-2 rounded-full border border-secondColor text-secondColor font-bold"
          >
            {item.tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogViewCard;
