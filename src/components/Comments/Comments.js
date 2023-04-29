import React, { useRef, useState } from "react";
import styles from "./Comments.module.css";
import EveryComment from "../EveryComment/EveryComment";
import AddComments from "../AddComments/AddComments";
import up_arrow from "../../assests/images/Comments/up_arrow.svg";

const Comments = ({ cardInfo, setstateComment }) => {
  const [addComment, setAddComment] = useState(false);
  console.log(cardInfo, "hcyjuhkij");
  return (
    <div className={styles.comment_parentBlock}>
      <h5>Комментарии</h5>
      <div>
        {cardInfo.length === 0 ? (
          <span>коментарий пока что нету...</span>
        ) : (
          cardInfo.map((commentEvery) => (
            <EveryComment commentEvery={commentEvery} key={commentEvery.id} />
          ))
        )}
      </div>
      {addComment ? (
        ""
      ) : (
        <button onClick={() => setAddComment(true)}>
          Оставить комментарий
        </button>
      )}
      <button
        className={styles.arrow_up_btn}
        onClick={() => setstateComment(false)}
      >
        <img src={up_arrow} alt="||" />
      </button>
      {addComment && <AddComments setAddComment={setAddComment} />}
    </div>
  );
};

export default Comments;
