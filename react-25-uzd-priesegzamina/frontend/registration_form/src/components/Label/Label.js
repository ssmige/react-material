import React from "react";
import styles from "./Label.module.css";

export default function Label({ text }) {
  return <label className={styles.label}>{text}</label>;
}
