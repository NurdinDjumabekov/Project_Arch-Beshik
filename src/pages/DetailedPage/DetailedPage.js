import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailedPage.module.css";
import usersComment from "../../assests/images/Detalied/users_comment.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeSkeleton } from "../../store/infoWorkSlice";
import Preloader from "../../components/Preloader/Preloader";

const DetailedPage = () => {
  const [date, setDate] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const dateComents = date.comments;
  const baseNums = "192.168.0.105";
  const dispatch = useDispatch();
  const { stateSkeleton } = useSelector((state) => state.infoWorkSlice);

  useEffect(() => {
    dispatch(changeSkeleton(false));
    axios
      .get(`http://${baseNums}:8000/api/content_detail/${id}/`)
      .then((date) => setDate(date.data.content));
    dispatch(changeSkeleton(true));
  }, [count]);
  const sendComment = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://${baseNums}:8000/api/content_detail/${id}/`,
      data: {
        email: email,
        name: name,
        comment: comment,
      },
    });
    setCount(count + 1);
    setTimeout(() => {
      setComment("");
      setEmail("");
      setName("");
    }, 500);
  };
  return (
    <>
      {stateSkeleton ? (
        <div className={styles.blockParent_for_detalied}>
          <div className="container">
            <div className={styles.parent_blockDetail}>
              <img src={date.image} alt="..." />
              {console.log(date.image)}
              <h1>{date.title}</h1>
              <p>{date.content}</p>
              <div>
                <h3>Комментарии</h3>
                {dateComents?.map((item) => (
                  <div className={styles.block_for_comments}>
                    <div>
                      <img src={usersComment} alt="comment" />
                    </div>

                    {/* <p>{item.pub_date}</p> */}
                    <div>
                      <h2>{item.name}</h2>
                      <h2>{item.email}</h2>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form action="" onSubmit={sendComment}>
                <input
                  placeholder="NurdinDjumabekov@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <textarea
                  placeholder="Комментарии"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
                <button type="submit">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default DetailedPage;
