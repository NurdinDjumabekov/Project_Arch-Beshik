import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddAdvertising.module.css";
import { changeStateAdvertisingBtn } from "../../store/stateforAdminSlice";

const AddAdvertising = () => {
  const { stateAdvertisingBtn } = useSelector(
    (state) => state.stateforAdminSlice
  );
  const dispatch = useDispatch();
  const addAdventising = () => {
    dispatch(changeStateAdvertisingBtn(false));
  };
  return (
    <>
      {stateAdvertisingBtn && (
        <div className={styles.advertising_parentBlock}>
          <div className="container">
            <div
              className="block_animations"
              onClick={() => dispatch(changeStateAdvertisingBtn(false))}
            ></div>
            <div className={styles.advertising_childBlock}>
              <form action="" onSubmit={addAdventising}>
                <h3>Добавить рекламу</h3>
                <input placeholder="Введите заголовок" />
                <input placeholder="Введите текст рекламы" />
                <input placeholder="номер телефона" />
                <button type="submit">Добавить</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAdvertising;
