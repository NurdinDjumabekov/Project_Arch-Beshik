export const addID = (arr) => {
  let count = 1;
  const newArr = arr.map((item) => {
    const newItem = {
      ...item,
      id: count,
    };
    count++;
    return newItem;
  });
  return newArr;
};
