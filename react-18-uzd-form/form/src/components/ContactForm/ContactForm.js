import React, { useState } from "react";
import "./ContactForm.css";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleButton = (e) => {
    setButton(console.log());
  };
  return (
    <div className="container">
      <div>
        <Label text="Name" /> <br />
        <TextInput value={name} onChange={handleNameChange} />
      </div>
      <div>
        <Label text="Username" /> <br />
        <TextInput value={username} onChange={handleUserNameChange} />
      </div>
      <div>
        <Label text="Email" /> <br />
        <TextInput value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <Label text="Message" /> <br />
        <TextInput value={message} onChange={handleMessageChange} />
      </div>
      <br />
      <div>
        <input type="checkbox" name="" id="agreeBox" />
        <label htmlFor="agreeBox">
          I agree to the{" "}
          <span style={{ color: "#1877f2" }}> terms and conditions</span>
        </label>{" "}
        <br />
      </div>
      <div>
        <input type="radio" id="yes" />
        <label htmlFor="yes">Yes</label>
        <input type="radio" name="" id="no" />
        <label htmlFor="no">No</label>
      </div>
      <div>
        <Button text="Submit" type="submit" onClick={handleButton} />
        <Button text="Cancel" type="reset" onClick={handleButton} />
      </div>
    </div>
  );
}
