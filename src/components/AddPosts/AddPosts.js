import React, { useState, useRef } from "react";
import styles from "./AddPosts.module.css";
import axios from "axios";

const AddPosts = ({ setAdminInput }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const baseNums = "192.168.0.105";
  // console.log(+category);

  // http://192.168.4.204:8000/api/content_create/
  // http://192.168.31.218:8000/api/category_create/
  const handleFn = (e) => {
    setImg(e.target.files[0]);
  };

  const addPostsAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);
    formData.append("category_id", 1);
    formData.append("content", description);
    formData.append("title", name);
    // formData.append("image", img);
    // console.log(formData);
    try {
      const response = await axios({
        method: "POST",
        url: `http://${baseNums}:8000/api/content_create/`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch {
      console.log("error");
    }
  };
  return (
    <>
      <div className={styles.block_shadow_forAddPosts}></div>
      <div className={styles.parentBlock_addPosts}>
        <h5>Добавление поста</h5>
        <form action="" onSubmit={addPostsAdmin} encType="multipart/form-data">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value={1}>Пункт 1</option>
            <option value={2}>Пункт 2</option>
            <option value={3}>Пункт 3</option>
            <option value={4}>Пункт 4</option>
            <option value={5}>Пункт 5</option>
            <option value={6}>Пункт 6</option>
          </select>
          <input
            type="file"
            name="image"
            onChange={handleFn}
            multiple
            accept="image/*"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="название"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="описание"
          ></textarea>
          {/* <input
            placeholder="описание"
          /> */}
          <button type="submit">Добавить пост</button>
        </form>
        <button onClick={() => setAdminInput(false)}>Отмена</button>
      </div>
    </>
  );
};

export default AddPosts;
