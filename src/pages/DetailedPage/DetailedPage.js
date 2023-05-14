import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./DetailedPage.module.css";
import usersComment from "../../assests/images/Detalied/users_comment.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeSkeleton } from "../../store/infoWorkSlice";
import Preloader from "../../components/Preloader/Preloader";
import DetailedPhotos from "../../components/DetailedPhotos/DetailedPhotos";
import { Advertising } from "../../components/Advertising/Advertising";

const DetailedPage = () => {
  const [date, setDate] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const dateComents = date.comments;
  const dispatch = useDispatch();
  const { stateSkeleton } = useSelector((state) => state.infoWorkSlice);
  useEffect(() => {
    dispatch(changeSkeleton(false));
    axios
      .get(`http://baielbekenov.pythonanywhere.com/api/content_detail/${id}/`)
      .then((date) => setDate(date.data.content));
    dispatch(changeSkeleton(true));
  }, []);
  // console.log(date);
  const sendComment = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://baielbekenov.pythonanywhere.com/api/content_detail/${id}/`,
      data: {
        email: email,
        name: name,
        comment: comment,
      },
    });

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
            <div className="block_animations"></div>
            <div className="block_info">
              <div className={styles.parent_blockDetail}>
                <DetailedPhotos date={date} />
                <div className={styles.block_delailedInfo_and_advertising}>
                  <div className={styles.contentBlock_detailed}>
                    <div className={styles.block_for_contentText}>
                      <h1>{date.title}</h1>
                      <p>{date.content}</p>
                    </div>
                    <div className={styles.comments_parentBlock}>
                      <h3>Комментарии</h3>
                      {dateComents ? (
                        dateComents?.map((item) => (
                          <div
                            className={styles.block_for_comments}
                            key={item.id}
                          >
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
                      ) : (
                        <p>комментарий пока что нету</p>
                      )}
                    </div>
                    <div className={styles.block_for_addComment}>
                      <h5>Оставить комментарий</h5>
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
                        <button type="submit">Оставить комментарий</button>
                      </form>
                    </div>
                  </div>
                  <Advertising />
                </div>
              </div>
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
//NurdinDjumabekov@gmail.com
