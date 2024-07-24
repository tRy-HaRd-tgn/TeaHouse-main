import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalIcon from "./Modal";
import MyInput from "../ui/input/MyInput";
import MyButton from "../ui/button/MyButton";
import MyModalInput from "../ui/modalInput/MyModalInput";
function Register() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <body className="container">
      <div className="container_body">
        <div className="container_body_div_img">
          <img className="container_body_img" src="/img/sign.svg"></img>
        </div>
        <form action="" className="container_form" onSubmit={handleSubmit}>
          <MyInput id="name" placeholder="Имя" type="text" required></MyInput>
          <MyInput
            id="surname"
            placeholder="Фамилия"
            type="text"
            required
          ></MyInput>
          <MyInput
            id="email"
            placeholder="Эл. почта"
            type="email"
            required
          ></MyInput>
          <div className="container_form_div_btn">
            <MyButton type="submit">Регистрация</MyButton>
          </div>
        </form>
        <div className="container_body_footer">
          <p className="container_footer_p">Уже есть аккаунт?</p>
          <Link className="container_footer_a" to="/">
            Login
          </Link>
        </div>
        <ModalIcon active={modalActive} setActive={setModalActive}>
          <div className="modal_container">
            <p className="modal_p">
              введите одноразовый код отправленный на эл. почту
            </p>
            <form onSubmit={handleSubmit}>
              <div className="modal_form">
                <MyModalInput
                  id="fs"
                  onChange={checkLen}
                  type="number"
                ></MyModalInput>
                <MyModalInput
                  id="sc"
                  onChange={checkLen}
                  type="number"
                ></MyModalInput>
                <MyModalInput
                  id="tr"
                  onChange={checkLen}
                  type="number"
                ></MyModalInput>
                <MyModalInput
                  id="fr"
                  onChange={checkLen}
                  type="number"
                ></MyModalInput>
              </div>
              <div className="modal_div">
                <button
                  className="modal_btn disable"
                  id="modal_btn"
                  type="submit"
                >
                  <p className="modal_btn_p">запросить код повторно</p>
                </button>
              </div>
            </form>
            <p className="modal_p_grey" id="timer_description">
              запросить код повторно
            </p>
            <h2 className="modal_p_grey timer" id="taimer"></h2>
          </div>
        </ModalIcon>
      </div>
    </body>
  );
  function checkLen(e) {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, -1);
    }
  }
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
