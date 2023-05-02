import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailedPage.module.css";

const DetailedPage = () => {
  const [date, setDate] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://192.168.31.218:8000/api/content_detail/${id}/`)
      .then((date) => setDate(date.data.content));
  }, []);
  //   comment.map((item) => console.log(item));
  //   console.log(date.comments);
  const aizhamal = date.comments;
  console.log(aizhamal);
  return (
    <div className={styles.parent_blockDetail}>
      <h1>{date.content}</h1>
      <p>{date.title}</p>
      <img src={date.image} alt="" />
      <p>
        {aizhamal?.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.pub_date}</p>
            <p>{item.comment}</p>
          </div>
        ))}
      </p>
    </div>
  );
};

export default DetailedPage;
