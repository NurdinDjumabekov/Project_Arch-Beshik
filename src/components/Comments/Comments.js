import React, { useRef, useState } from "react";
import styles from "./Comments.module.css";
import EveryComment from "../EveryComment/EveryComment";
import AddComments from "../AddComments/AddComments";

const Comments = ({ cardInfo }) => {
  const [addComment, setAddComment] = useState(false);
  return (
    <div className={styles.comment_parentBlock}>
      <h5>Комментарии</h5>
      <div>
        {cardInfo.map((commentEvery) => (
          <EveryComment commentEvery={commentEvery} key={commentEvery.id} />
        ))}
      </div>
      {addComment ? (
        ""
      ) : (
        <button onClick={() => setAddComment(true)}>
          Оставить комментарий
        </button>
      )}
      {addComment && <AddComments setAddComment={setAddComment} />}
    </div>
  );
};

export default Comments;
