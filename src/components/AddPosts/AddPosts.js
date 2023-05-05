import React, { useState, useRef } from "react";
import styles from "./AddPosts.module.css";
import axios from "axios";
import SelectCategory from "../SelectCategory/SelectCategory";

const AddPosts = ({ setAdminInput }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const baseNums = "192.168.0.105";
  const handleFn = (e) => {
    setImg(e.target.files[0]);
  };
  const addPhotoRef = useRef(null);

  const addPostsAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);
    formData.append("category_id", 2);
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
  const addPhotoFN = () => {
    addPhotoRef.current.click();
  };

  return (
    <>
      <div className={styles.block_shadow_forAddPosts}></div>
      <div className={styles.parentBlock_addPosts}>
        <h5>Добавление поста</h5>
        <form action="" onSubmit={addPostsAdmin} encType="multipart/form-data">
          <SelectCategory />
          <input
            type="file"
            name="image"
            onChange={handleFn}
            className={styles.none_Block}
            multiple
            accept="image/*"
            ref={addPhotoRef}
          />
          <button className={styles.one} onClick={addPhotoFN}>
            Загрузите картинку
          </button>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="название"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="описание"
          ></textarea>
          <button className={styles.two} type="submit">
            Добавить пост
          </button>
        </form>
        <button onClick={() => setAdminInput(false)}>Отмена</button>
      </div>
    </>
  );
};

export default AddPosts;
