import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  // const [button, setButton] = useState();

  useEffect(() => {
    if (username.length > 3) {
      setIsUserNameValid(true);
    } else {
      setIsUserNameValid(false);
    }

    if (email.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [username, email]);

  return (
    <form className={styles.form}>
      <Label text={"Name"} />
      <Input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label text={"Username"} />
      <Input
        startIcon={<i className="fa-solid fa-user"></i>}
        endIcon={
          isUserNameValid ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )
        }
        type={"text"}
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        isValid={isUserNameValid}
      />

      <Label text={"Email"} />
      <Input
        type={"email"}
        startIcon={<i className="fa-solid fa-envelope"></i>}
        endIcon={
          isEmailValid ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i class="fa-solid fa-xmark"></i>
          )
        }
        isValid={isEmailValid}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => {}} text={"Submit"} variant={"primary"} />
      <Button onClick={() => {}} text={"Cancel"} variant={"secondary"} />
    </form>
  );
}
// <div className="container">
//   <div>
//     <Label text="Name" /> <br />
//     <Input value={name} onChange={handleNameChange} />
//   </div>
//   <div>
//     <Label text="Username" /> <br />
//     <Input value={username} onChange={handleUserNameChange} />
//   </div>
//   <div>
//     <Label text="Email" /> <br />
//     <Input value={email} onChange={handleEmailChange} />
//   </div>
//   <div>
//     <Label text="Message" /> <br />
//     <Input value={message} onChange={handleMessageChange} />
//   </div>
//   <br />
//   <div>
//     <input type="checkbox" name="" id="agreeBox" />
//     <label htmlFor="agreeBox">
//       I agree to the{" "}
//       <span style={{ color: "#1877f2" }}> terms and conditions</span>
//     </label>{" "}
//     <br />
//   </div>
//   <div>
//     <input type="radio" id="yes" />
//     <label htmlFor="yes">Yes</label>
//     <input type="radio" name="" id="no" />
//     <label htmlFor="no">No</label>
//   </div>
//   <div>
//     <Button text="Submit" type="submit" onClick={handleButton} />
//     <Button text="Cancel" type="reset" onClick={handleButton} />
//   </div>
// </div>
