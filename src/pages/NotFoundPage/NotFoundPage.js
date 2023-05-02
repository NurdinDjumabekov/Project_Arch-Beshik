import React from "react";

const NotFoundPage = () => {
  const block_forNotFound = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={block_forNotFound}>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
