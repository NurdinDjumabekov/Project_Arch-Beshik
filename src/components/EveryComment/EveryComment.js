import React from "react";
import styles from "./EveryComment.module.css";
import comment_users from "../../assests/images/everyComments/comment_users.svg";

const EveryComment = ({ commentEvery }) => {
  console.log(commentEvery.name);
  return (
    <>
      <div className={styles.parent_everyCommentsBlock}>
        <div>
          <img src={comment_users} alt="c" />
        </div>
        <div>
          <h6>{commentEvery.name}</h6>
          <p>{commentEvery.comment}</p>
        </div>
      </div>
    </>
  );
};

export default EveryComment;
