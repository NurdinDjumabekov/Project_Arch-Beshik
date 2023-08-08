import React, { useEffect, useState } from "react";
import styles from "./AddComments.module.css";
import { useDispatch } from "react-redux";
import {
  addCommentHaveUser,
  addCommentNotHaveUser,
} from "../../../store/reducers/commentsSlice";
import { toTakeDetailedInfo } from "../../../store/reducers/otherAllStateSlice";

const AddComments = ({ id }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    name: "",
    comment: "",
  });

  const [stateToken, setStateToken] = useState("");

  useEffect(() => {
    setStateToken(localStorage.getItem("token"));
  }, []);

  // const addCommentHaveUserFN = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     addCommentHaveUser({
  //       comment: data.comment,
  //     })
  //   );
  //   dispatch(toTakeDetailedInfo({ id }));
  // };

  const addCommentNotHaveUserFN = (e) => {
    e.preventDefault();
    dispatch(
      addCommentNotHaveUser({
        comment: data.comment,
        name: data.name,
        email: data.email,
        id: id,
      })
    );
    setTimeout(() => {
      dispatch(toTakeDetailedInfo({ id }));
    }, 1000);
  };

  return (
    <div className={styles.block_for_addComment}>
      <h5>Оставить комментарий</h5>
      {/* {stateToken ? (
        <form action="" onSubmit={addCommentHaveUserFN}>
          <textarea
            placeholder="Ваш кометарий"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                comment: e.target.value,
              }))
            }
            value={data.comment}
          ></textarea>
          <button type="submit">Оставить комментарий</button>
        </form>
      ) : ( */}
      <form action="" onSubmit={addCommentNotHaveUserFN}>
        <input
          type="email"
          placeholder="Ваш Email"
          required
          onChange={(e) =>
            setData((info) => ({
              ...info,
              email: e.target.value,
            }))
          }
          value={data.email}
        />
        <input
          placeholder="ваше имя"
          required
          onChange={(e) =>
            setData((info) => ({
              ...info,
              name: e.target.value,
            }))
          }
          value={data.name}
        />
        <textarea
          placeholder="Ваш кометарий"
          required
          onChange={(e) =>
            setData((info) => ({
              ...info,
              comment: e.target.value,
            }))
          }
          value={data.comment}
        ></textarea>
        <button type="submit">Оставить комментарий</button>
      </form>
      {/* )} */}
    </div>
  );
};

export default AddComments;
