import React from "react";
import styles from "@/styles/404.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.containerGhost}>
        <div className={styles.ghostCopy}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
          <div className={styles.four}></div>
        </div>
        <div className={styles.ghost}>
          <div className={styles.face}>
            <div className={styles.eye}></div>
            <div className={styles.eyeRight}></div>
            <div className={styles.mouth}></div>
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
}
