import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import AddPosts from "../../components/AddPosts/AddPosts";

const AdminPage = () => {
  const [adminInput, setAdminInput] = useState(false);
  return (
    <div>
      <div className="container">
        <div className={styles.block_push}></div>
        <h1>
          Добро пожаловать, <span>админ</span>
        </h1>
        <div className={styles.block_for_btnsMain}>
          <button onClick={() => setAdminInput(!adminInput)}>
            Добавление постов
          </button>
          <button>Добавление постов</button>
          <button>Добавление постов</button>
        </div>
        {adminInput && <AddPosts setAdminInput={setAdminInput} />}
      </div>
    </div>
  );
};

export default AdminPage;
