import React from "react";

import Header from "../Header";

import styles from "./page.module.css";

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Page;
