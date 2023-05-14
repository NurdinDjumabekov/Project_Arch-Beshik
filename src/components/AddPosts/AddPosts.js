import React, { useState, useRef, useEffect } from "react";
import styles from "./AddPosts.module.css";
import axios from "axios";
import SelectCategory from "../SelectCategory/SelectCategory";
import { useSelector } from "react-redux";
import AddApartaments from "../AddApartaments/AddApartaments";

const AddPosts = ({ setAdminInput }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState(0);
  ///// Добавочные useState для квартир
  const [stateApartament, setStateApartament] = useState(false);
  const [owner, setOwner] = useState("");
  const [amount, setAmount] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const [remont, setRemont] = useState("");
  const [udobstva, setUdobstva] = useState("");
  const [price, setPrice] = useState(0);
  console.log(price, owner, udobstva);
  const handleFn = (e) => {
    setImg(e.target.files[0]);
  };

  const addPhotoRef = useRef(null);

  useEffect(() => {
    if (+category === 9 || +category === 10) {
      setStateApartament(true);
    } else {
      setStateApartament(false);
    }
  }, [category]);

  const addPostsAdmin = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setAdminInput(false);
    const formData = new FormData();
    formData.append("image", img);
    formData.append("category_id", +category);
    formData.append("content", description);
    formData.append("title", name);
    formData.append("owner", owner);
    formData.append("amount_of_room", amount);
    formData.append("phone_number", phoneNum);
    formData.append("remont", remont);
    formData.append("udobstva", udobstva);
    formData.append("price", price);
    try {
      if (stateApartament) {
        const response = await axios({
          method: "POST",
          url: `http://baielbekenov.pythonanywhere.com/api...................`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });
        console.log(response);
      } else {
        const response = await axios({
          method: "POST",
          url: `http://baielbekenov.pythonanywhere.com/api/content_create/`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        });
        console.log(response);
      }
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
      <div
        className={styles.block_shadow_forAddPosts}
        onClick={() => setAdminInput(false)}
      >
        <div className="block_animations"></div>
      </div>
      {stateApartament ? (
        <div className={styles.parentBlock_addApartament}>
          <h5>Добавление поста</h5>
          <form
            action=""
            onSubmit={addPostsAdmin}
            encType="multipart/form-data"
          >
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
            />
            <AddApartaments
              setOwner={setOwner}
              setAmount={setAmount}
              setPhoneNum={setPhoneNum}
              setRemont={setRemont}
              setUdobstva={setUdobstva}
              setPrice={setPrice}
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="описание"
            ></textarea>
            <button className={styles.addBtn} type="submit">
              Загрузить пост
            </button>
          </form>
          {/* <button onClick={() => setAdminInput(false)}>Отмена</button> */}
        </div>
      ) : (
        <div className={styles.parentBlock_addPosts}>
          <h5>Добавление поста</h5>
          <form
            action=""
            onSubmit={addPostsAdmin}
            encType="multipart/form-data"
          >
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
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="описание"
            ></textarea>
            <button className={styles.addBtn} type="submit">
              Загрузить пост
            </button>
          </form>
          <button onClick={() => setAdminInput(false)}>Отмена</button>
        </div>
      )}
    </>
  );
};

export default AddPosts;
