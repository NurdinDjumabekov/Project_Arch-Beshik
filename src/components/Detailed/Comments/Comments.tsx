import React from "react";
import styles from "./Comments.module.scss";
type everyComment = {
  id: number;
  text: string;
};
type dataComment = {
  comments: everyComment[];
};

const Comments: React.FC<dataComment> = ({ comments }) => {
  return (
    <div className={styles.comments}>
      {comments?.map((com) => (
        <div></div>
      ))}
    </div>
  );
};

export default Comments;
