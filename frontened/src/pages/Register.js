import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import MyLogo from "../components/MyLogo";
import ConfirmationForm from "../components/ConfirmationForm";
function Register() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <body className="container">
      <div className="container_body">
        <MyLogo />
        <RegistrationForm action="" handleSubmit={handleSubmit} />
        <div className="container_body_footer">
          <p className="container_footer_p">Уже есть аккаунт?</p>
          <Link className="container_footer_a" to="/">
            Login
          </Link>
        </div>
        <ConfirmationForm active={modalActive} setActive={setModalActive} handleSubmit={handleSubmit}/>
      </div>
    </body>
  );
  function handleSubmit(e) {
    e.preventDefault();
    setModalActive(true);
    document.getElementById("fs").value = "";
    document.getElementById("sc").value = "";
    document.getElementById("tr").value = "";
    document.getElementById("fr").value = "";

    let num = 15;
    let sec = document.querySelector("#taimer");
    sec.textContent = num;
    sec.classList.remove("disable");
    let sec_description = document.querySelector("#timer_description");
    sec_description.classList.remove("disable");
    let btn = document.querySelector("#modal_btn");
    btn.classList.add("disable");

    var timer = setInterval(function () {
      if (num === -1) {
        sec.classList.add("disable");
        sec_description.classList.add("disable");
        btn.classList.remove("disable");
      }
      if (num < 0) {
        clearInterval(timer);
      } else {
        sec.textContent = num;
      }
      num -= 1;
    }, 1000);
  }
}

export default Register;
