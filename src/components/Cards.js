import React from "react";
import styles from "./Cards.module.css";
import googleLogo from "../Assets/GOOGL.png";
import fbLogo from "../Assets/FB.png";
import amznLogo from "../Assets/AMZN.svg";

function Cards() {
  return (
    <div className={styles["cards-container"]}>
      <div className={styles["card"]}>
        GOOGL
        <img src={googleLogo} alt="Google logo" />
        1515 USD
      </div>
      <div className={styles["card"]}>
        FB
        <img src={fbLogo} alt="Facebook logo" />
        266 USD
      </div>
      <div className={styles["card"]}>
        AMZN
        <img src={amznLogo} alt="Amazon logo" />
        3116 USD
      </div>
    </div>
  );
}

export default Cards;
