import React from "react";
import "./TextInput.css";

export default function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="textinput"
      value={value}
      onChange={onChange}
    />
  );
}
