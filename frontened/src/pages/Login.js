import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../components/MyLogo";
import MyInput from "../ui/input/MyInput";
import MyButton from "../ui/button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
function Login() {
  const router = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const clickhandler = (e) => {
    setIsAuth(true);
    e.preventDefault();
    localStorage.setItem("auth",true)
    router('/')
  };
  return (
    <div className="container">
      <body className="container_body">
        <MyLogo />
        <form action="" onSubmit={clickhandler} className="container_form">
          <MyInput id="email" placeholder="Эл. почта" type="email" required />
          <div className="container_form_div_btn">
            <MyButton type="submit" >
              Вход
            </MyButton>
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
