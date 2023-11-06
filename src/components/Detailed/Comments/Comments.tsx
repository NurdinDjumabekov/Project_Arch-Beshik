import React, { useState } from "react";
import styles from "./Comments.module.scss";
import ModalWin from "../../ModalWin/ModalWin";
import AddComment from "../AddComment/AddComment";
type everyComment = {
  id: number;
  comment: string;
  email: string;
  name: string;
  pub_date: string
};
type dataComment = {
  comments: everyComment[];
  id: number
};

const Comments: React.FC<dataComment> = ({ comments, id }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log(comments, "comments");

  return (
    <div className={styles.comments}>
      <h4>Коментарии</h4>
      {comments?.map((com) => (
        <div key={com?.id}>
          <div>
            <p>{com?.email}</p>
            <p>{com?.name}</p>
          </div>
          <p>{com?.comment}</p>
        </div>
      ))}
      <button onClick={() => setOpenModal(true)}>Добавить комментарий</button>
      <ModalWin openModal={openModal} setOpenModal={setOpenModal} color={false}>
        <AddComment id={id} />
      </ModalWin>
    </div>
  );
};

export default Comments;
