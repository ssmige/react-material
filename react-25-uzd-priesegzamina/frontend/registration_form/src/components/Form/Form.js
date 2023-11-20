import React, { useState } from "react";
import styles from "./Form.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";
export default function Form({ variant }) {
  const [name, setName] = useState("");
  return (
    <form className={styles.form}>
      <Label text={"Name"} />
      <Input
        startIcon={<i className="fa-solid fa-user"> </i>}
        type={"text"}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Enter name"}
      />
      <Label text={"Email"} />
      <Input
        startIcon={<i class="fa-regular fa-envelope"></i>}
        type={"email"}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Enter email"}
      />
      <Label text={"Password"} />
      <Input
        startIcon={<i class="fa-solid fa-lock"></i>}
        type={"password"}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Enter password"}
      />
      <Button className={styles.submitButton} text={"Submit"} />
    </form>
  );
}
