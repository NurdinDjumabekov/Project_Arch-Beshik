import React, { useState, useRef } from "react";
import styles from "./EditPosts.module.css";
import axios from "axios";
import SelectCategory from "../SelectCategory/SelectCategory";
import { useDispatch } from "react-redux";
import { changeStateCount } from "../../store/infoWorkSlice";

const EditPosts = ({ setForIconEdit, cardInfo }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(cardInfo.content);
  const [name, setName] = useState(cardInfo.title);
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState(0);
  const handleFn = (e) => {
    setImg(e.target.files[0]);
  };
  const addPhotoRef = useRef(null);

  const addPostsAdmin = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setForIconEdit(false);
    const formData = new FormData();
    formData.append("image", img);
    formData.append("category_id", +category);
    formData.append("content", description);
    formData.append("title", name);
    try {
      const response = await axios({
        method: "PATCH",
        url: `http://baielbekenov.pythonanywhere.com/api/content_update/${cardInfo.id}/`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
      });
      console.log(response);
      dispatch(changeStateCount());
    } catch {
      console.log("error");
      // setAdminInput(false);
    }
  };
  const addPhotoFN = () => {
    addPhotoRef.current.click();
  };
  // console.log(+category);
  return (
    <>
      <div className={styles.block_shadow_forAddPosts}>
        <div className="block_animations"></div>
      </div>
      <div className={styles.parentBlock_addPosts}>
        <h5>Добавление поста</h5>
        <form action="" onSubmit={addPostsAdmin} encType="multipart/form-data">
          <SelectCategory setCategory={setCategory} category={category} />
          <input
            type="file"
            name="image"
            onChange={handleFn}
            className={styles.none_Block}
            multipleтзь
            accept="image/*"
            ref={addPhotoRef}
          />
          <div className={styles.change_photo} onClick={() => addPhotoFN()}>
            Загрузите фотографии
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="название"
            value={name}
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="описание"
            value={description}
          ></textarea>
          <button className={styles.two} type="submit">
            Загрузить пост
          </button>
        </form>
        <button onClick={() => setForIconEdit(false)}>Отмена</button>
      </div>
    </>
  );
};

export default EditPosts;
