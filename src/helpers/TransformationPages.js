export const TransformationPages = (pages, now_page) => {
  let info = [];
  if (now_page <= 4) {
    info = pages.slice(0, 5);
  } else {
    info = pages.slice(now_page - 3, now_page + 2);
  }
  //   console.log(info, "edrtyghuij");
  return info;
};
