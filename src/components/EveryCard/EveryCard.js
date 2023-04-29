import React, { useState } from "react";
import styles from "./EveryCard.module.css";
import icon_comment from "../../assests/images/Icon_comment.svg";
import Comments from "../Comments/Comments";

const EveryCard = ({ cardInfo }) => {
  const [stateComment, setstateComment] = useState(false);
  return (
    <div className={styles.everyCard__parentBlock}>
      <div className={styles.everyCard__childBlock}>
        <h3>Новости</h3>
        <div className={styles.everyCard__infoImg}>
          <img src={cardInfo.url} />
        </div>
        <p>{cardInfo.date}</p>
      </div>
      <div className={styles.block_description}>
        <h4>Описание</h4>
        <p
          className={
            stateComment ? styles.active_moreInfo : styles.description_text
          }
        >
          {cardInfo.moreInfo}
        </p>
        {stateComment ? (
          <Comments
            cardInfo={cardInfo.comments}
            setstateComment={setstateComment}
          />
        ) : (
          <button onClick={() => setstateComment(true)}>
            <img src={icon_comment} alt="photo" />
          </button>
        )}
      </div>
    </div>
  );
};

export default EveryCard;
