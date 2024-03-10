"use client";
import CustomInput from "../utility/CustomInput";
import CustomTextArea from "../utility/CustomTextArea";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const BlogCreateContainer = () => {
  const animatedComponents = makeAnimated();

  //   vars
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla2", label: "Vanill2" },
    { value: "vanilla3", label: "Vanilla3" },
    { value: "vanilla4", label: "Vanilla4" },
    { value: "vanilla5", label: "Vanilla5" },
  ];
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    tags: [],
  });

  //   handles functions
  const handleInputData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  //   options
  const handleOptions = (selectedOptions) => {
    setInputData({
      ...inputData,
      tags: selectedOptions,
    });
  };
  const submitCreateBlog = () => {
    console.log(inputData);
  };

  return (
    <div>
      <CustomInput
        label={"أسم المدنة"}
        placeholder={"أسم المدنة"}
        name={"title"}
        onChange={handleInputData}
        value={inputData.title}
      />
      <CustomTextArea
        label={"الوصف"}
        placeholder={"الوصف"}
        name={"description"}
        onChange={handleInputData}
        value={inputData.description}
      />
      <Select
        isMulti
        options={options}
        className="basic-multi-select  my-3"
        classNamePrefix="select"
        onChange={handleOptions}
        value={inputData.tags}
        instanceId={"value"}
        name="tags"
        isClearable
        components={animatedComponents}
        closeMenuOnSelect={false}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "var(--primary-color)" : "#cfd8dc4d",
            outline: "none",
            borderWidth: "2px",
            borderRadius: 6,
            background: "#fafafa",
          }),
          option: (base, state) => ({
            ...base,
            borderRadius: 5,
            color: state.isFocused ? "#fff" : "",
          }),
          menuList: (base) => ({
            ...base,
            background: "#cfd8dc4d",
            padding: 5,
            borderWidth: 0,
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,

          colors: {
            ...theme.colors,
            primary75: "var(--primary-color)",
            primary50: "var(--primary-color)",
            primary25: "var(--primary-color)",
            primary: "var(--primary-color)",
          },
        })}
      />
      <Button className="bg-primaryColor" onClick={submitCreateBlog}>
        إرسال
      </Button>
    </div>
  );
};

export default BlogCreateContainer;
