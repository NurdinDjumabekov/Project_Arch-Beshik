import React from "react";

const NotFoundPage = () => {
  const block_forNotFound = {
    height: "100vh",
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  };
  const h1 = {
    color: "white",
  };
  return (
    <div style={block_forNotFound}>
      <h1 style={h1}>Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
