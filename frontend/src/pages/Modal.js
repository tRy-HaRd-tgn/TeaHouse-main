import React from "react";
import "./Register.jsx";

const Modal = ({
  setName,
  setSurname,
  setEmail,
  active,
  setActive,
  children,
  formArr,
  setFormArray,
}) => {
  function clickHandler() {
    setActive(false);
    setName("");
    setSurname("");
    setEmail("");
    setFormArray(["", "", "", ""]); 
  }
  return (
    <div className={active ? "modal active" : "modal"} onClick={clickHandler}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
