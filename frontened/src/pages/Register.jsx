import React, { useEffect, useState ,useRef} from "react";
import { Link} from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import MyLogo from "../components/MyLogo";
import ConfirmationForm from "../components/ConfirmationForm";
export default function Register() {
  const [formArr,setFormArray]= useState([null,null,null,null]);
  const [name,setName] = useState();
  const [surname,setSurname] = useState();
  const [email,setEmail] = useState();

  const [timer,setTimer]= useState(15);
  useEffect(()=>{
      const timers= setInterval(()=>{
        setTimer(temp => temp-1)
      },1000)
      return () =>{
        clearInterval(timers)
      }
  },[])
  const [modalActive, setModalActive] = useState(false);
  return (
    <body className="container">
      <div className="container_body">
        <MyLogo />
        <RegistrationForm name={name} surname={surname} email={email} setName={setName} setSurname={setSurname} setEmail={setEmail} action="" handleSubmit={handleSubmit} />
        <div className="container_body_footer">
          <p className="container_footer_p">Уже есть аккаунт?</p>
          <Link className="container_footer_a" to="/">
            Login
          </Link>
        </div>
        <ConfirmationForm setFormArray={setFormArray}name={name} surname={surname} email={email} setName={setName} setSurname={setSurname} setEmail={setEmail} timer={timer} formArr={formArr} active={modalActive} setActive={setModalActive}/>
      </div>
    </body>
  );

  function handleSubmit(e) {
    e.preventDefault();
    setModalActive(true);
  }
}
