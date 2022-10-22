import React from "react";
import styles from "./Header.module.css";
// styles[""]
function Header() {
  return <div className={styles["header-container"]}>
    <h2>Quikie</h2>
    <h3>Apps</h3>
  </div>;
}

export default Header;
