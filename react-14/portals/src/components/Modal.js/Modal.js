import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(<div>Modal</div>, document.body);
}
