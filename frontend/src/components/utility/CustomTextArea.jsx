import React from "react";

const CustomTextArea = ({
  label,
  placeholder,
  onChange,
  value,

  name,
}) => {
  return (
    <>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-bold text-descColor"
      >
        {label}
      </label>
      <textarea
        id="message"
        rows="4"
        onChange={onChange}
        name={name}
        value={value}
        className="bg-gray-50 border-2 border-blue-gray-100/30 text-gray-900 text-sm rounded-lg focus:border-primaryColor w-full p-2.5  outline-none "
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default CustomTextArea;
