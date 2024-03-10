import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="container mt-10">{children}</div>
    </div>
  );
};

export default layout;
