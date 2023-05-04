import React, { useState } from "react";
import styles from "./EveryCard.module.css";
import icon_comment from "../../assests/images/Icon_comment.svg";
// import Comments from "../Comments/Comments";
import { NavLink } from "react-router-dom";

const EveryCard = ({ cardInfo }) => {
  return (
    <NavLink to={`/content_detail/${cardInfo.id}`}>
      <div className={styles.everyCard__parentBlock}>
        <div className={styles.everyCard__childBlock}>
          <h3>Новости</h3>
          <div className={styles.everyCard__infoImg}>
            <img src={cardInfo.image} />
          </div>
          <p>{cardInfo.data_added}</p>
        </div>
        <div className={styles.block_description}>
          <h4>{cardInfo.title}</h4>
          <p className={styles.description_text}>{cardInfo.content}</p>
          <button>
            <img src={icon_comment} alt="photo" />
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default EveryCard;

{
  /* {stateComment ? (
            <Comments
              cardInfo={cardInfo.comments}
              setstateComment={setstateComment}
            />
          ) : (
            <button onClick={() => setstateComment(true)}>
              <img src={icon_comment} alt="photo" />
            </button>
          )} */
}
