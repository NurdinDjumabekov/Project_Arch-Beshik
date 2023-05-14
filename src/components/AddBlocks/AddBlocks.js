import React, { useState } from "react";

const AddBlocks = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const handleFn = (e) => {
    setImg(e.target.files[0]);
  };
  const addPhotoRef = useRef(null);

  const addPostsAdmin = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setAdminInput(false);
    const formData = new FormData();
    formData.append("image", img);
    formData.append("category_id", +category);
    formData.append("content", description);
    formData.append("title", name);
    try {
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
    } catch {
      console.log("error");
      // setAdminInput(false);
    }
  };
  const addPhotoFN = () => {
    addPhotoRef.current.click();
  };
  return (
    <>
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
      <input onChange={(e) => setName(e.target.value)} placeholder="название" />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="описание"
      ></textarea>
      <button className={styles.two} type="submit">
        Загрузить пост
      </button>
    </>
  );
};

export default AddBlocks;
