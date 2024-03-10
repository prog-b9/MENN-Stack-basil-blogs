import React from "react";

const CustomInput = ({
  label,
  placeholder,
  type = "text",
  icon,
  onChange,
  value,
  name,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-bold text-descColor"
      >
        {label}
      </label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-descColor">
          {icon}
        </div>
        <input
          type={type}
          onChange={onChange}
          value={value}
          id={label}
          name={name}
          className={`bg-gray-50 border-2 border-blue-gray-100/30 text-gray-900 text-sm rounded-lg focus:border-primaryColor block w-full ${
            icon ? "ps-10" : ""
          }  p-2.5  outline-none `}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CustomInput;
