import React from "react";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  const gender = data.gender;
  const firstName = data.name.first;
  const lastName = data.name.last;
  const phoneNumber = data.phone;
  const photo = data.picture.large;

  return (
    // aria-label for accessibility
    <div
      className={styles["card-container"]}
      role="article"
      aria-label="Profile Card"
    >
      <div className={styles["main-container"]}>
        <div className={styles["profile-pic"]}>
          <img src={photo} alt="person, passport size" aria-hidden="true" />
        </div>

        <div className={styles.info}>
          <div className={styles["first-name"]} role="heading" aria-level="2">
            Name: {firstName}
          </div>{" "}
          <div className={styles["last-name"]} role="heading" aria-level="2">
            {lastName}
          </div>
          <div className={styles["gender"]} aria-label="Gender">
            Sex: {gender}
          </div>
          <div className={styles["phone"]} aria-label="Phone Number">
            {"Phone"}: {phoneNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
