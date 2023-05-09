import React, { useState } from "react";

const Pagination = () => {
  let a = 10;
  const [pagination, setPagination] = useState([]);
  for (let i = 0; i < a; i++) {
    setPagination.push(i);
  }
  return <div></div>;
};

export default Pagination;
