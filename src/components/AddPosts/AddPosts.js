import React, { useState } from "react";
import styles from "./AddPosts.module.css";
import axios from "axios";
import photo from "../../assests/images/main/main_photo_back.jpg";

const AddPosts = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  //http://192.168.4.204:8000/api/content_create/

  const addPostsAdmin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://192.168.31.218:8000/api/category_create/",
      data: {
        content: "ytuiihioj",
        title: "ftyuguhij",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufBTSTgHgDApCMQwsP5qY80GgRHxMHqAyoQ&usqp=CAU",
      },
    }).then((resp) => console.log(resp));
  };
  return (
    <div>
      <form action="" onSubmit={addPostsAdmin}>
        <input
          onChange={(e) => setCategory(e.target.value)}
          placeholder="категория"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="описание"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="название"
        />
        <button type="submit">добавить пост</button>
      </form>
    </div>
  );
};

export default AddPosts;
