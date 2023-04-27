import React from "react";
import styles from "./MainSkeleton.module.css";

const MainSkeleton = () => {
  return (
    <div className={styles.skeleton_parentBlock}>
      <div className={styles.skeleton_childBlock}>
        <div className={styles.skeleton_top}>
          <div className={styles.skeleton_header}></div>
        </div>
        <div className={styles.skeleton_bottom}>
          <div className={styles.skeleton_bottom_child}>
            <div className={styles.skeleton_info1}></div>
            <div className={styles.skeleton_info2}></div>
            <div className={styles.skeleton_info3}></div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////// */}
      <div className={styles.skeleton_childBlock}>
        <div className={styles.skeleton_top}>
          <div className={styles.skeleton_header}></div>
        </div>
        <div className={styles.skeleton_bottom}>
          <div className={styles.skeleton_bottom_child}>
            <div className={styles.skeleton_info1}></div>
            <div className={styles.skeleton_info2}></div>
            <div className={styles.skeleton_info3}></div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////// */}
      <div className={styles.skeleton_childBlock}>
        <div className={styles.skeleton_top}>
          <div className={styles.skeleton_header}></div>
        </div>
        <div className={styles.skeleton_bottom}>
          <div className={styles.skeleton_bottom_child}>
            <div className={styles.skeleton_info1}></div>
            <div className={styles.skeleton_info2}></div>
            <div className={styles.skeleton_info3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSkeleton;
