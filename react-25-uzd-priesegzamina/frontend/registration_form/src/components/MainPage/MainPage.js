import React from "react";
import styles from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div>
      <div className={styles.head}>
        <img
          className={styles.logoLetter}
          src="https://trucksrl.sirv.com/pub/media/catalog/product/i/m/image_5515_0.jpg?q=80&cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=400&h=0"
          alt="letterB"
        />
        <h1>rand.</h1>
      </div>
      <div className={styles.picturesContainer}>
        <img
          className={styles.imgMain}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYECHo2MGzM2Jrdnu9yuzFhZ0WvtelMNZn3MYgY30vXlvbhb-r-wx_wyyaWnxFr24PgU&usqp=CAU"
          alt="logo"
        />
      </div>

      <h4>Start for free & Get Attractive offer Today! </h4>
    </div>
  );
}
