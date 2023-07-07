import React from "react";
import styles from "./AllComments.module.css";
import usersComment from "../../../assests/images/Detalied/users_comment.svg";

const AllComments = ({ dateComents }) => {
  return (
    <div className={styles.comments_parentBlock}>
      <h3>Комментарии</h3>
      {dateComents !== "" ? (
        <p className={styles.noComments}>комментарий пока что нету</p>
      ) : (
        dateComents?.map((item) => (
          <div className={styles.block_for_comments} key={item.id}>
            <div>
              <img src={usersComment} alt="comment" />
            </div>
            <div>
              <h2>{item.name}</h2>
              <h5>{item.email}</h5>
              <p>{item.comment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllComments;
