import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.parent_preloader}>
      <div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Preloader;