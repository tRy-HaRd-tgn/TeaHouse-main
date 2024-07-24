import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../components/MyLogo";
import MyInput from "../ui/input/MyInput";
import MyButton from "../ui/button/MyButton";
function Login() {
  return (
    <div className="container">
      <body className="container_body">
        <MyLogo />
        <form action="" className="container_form">
          <MyInput id="email" placeholder="Эл. почта" type="email" required />
          <div className="container_form_div_btn">
            <MyButton type="submit">Вход</MyButton>
          </div>
        </form>
        <div className="container_body_footer">
          <p className="container_footer_p">Ещё нет аккаунта ?</p>
          <Link className="container_footer_a" to="/Register">
            Register
          </Link>
        </div>
      </body>
    </div>
  );
}
export default Login;
