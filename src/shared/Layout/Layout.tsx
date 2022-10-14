import React from "react";
import styles from "./layout.css";

interface ILayoutPrors {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutPrors) {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.sun}></div>
        <div className={styles.moon}></div>
      </div>
      <div className={styles.layoutContainer}>{children}</div>
    </>
  );
}
