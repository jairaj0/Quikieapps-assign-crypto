import React from "react";
import styles from "./Info.module.css";
import Cards from "./Cards";
import Table from "./Table";

function Info() {
  return (
    <div className={styles["info-container"]}>
      <Cards />
      <Table />
    </div>
  );
}

export default Info;
