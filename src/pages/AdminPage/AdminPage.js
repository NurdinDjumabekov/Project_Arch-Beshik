import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import AddPosts from "../../components/AddPosts/AddPosts";

const AdminPage = () => {
  const [adminInput, setAdminInput] = useState(false);
  return (
    <div>
      <div className="container">
        <div className={styles.block_push}></div>
        <h1>Добро пожаловать, админ</h1>
        <button onClick={() => setAdminInput(!adminInput)}>
          Добавление постов
        </button>
        {adminInput && <AddPosts />}
      </div>
    </div>
  );
};

export default AdminPage;
