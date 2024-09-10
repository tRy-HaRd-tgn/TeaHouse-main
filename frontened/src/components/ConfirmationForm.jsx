import { useEffect } from "react";
import ModalIcon from "../pages/Modal";
import MyModalInput from "../ui/modalInput/MyModalInput";

export default function ConfirmationForm({name,surname,email,setName,setSurname,setEmail, timer,formArr,active,setActive}) {
  useEffect(()=>{

  },[active])
  return (
    <ModalIcon name={name} surname={surname} email={email} setName={setName} setSurname={setSurname} setEmail={setEmail} active={active} setActive={setActive}>
      <div className="modal_container">
        <p className="modal_p">
          введите одноразовый код отправленный на эл. почту
        </p>
        <form >
          <div className="modal_form">
            {formArr.map((value,index)=>{
                return <MyModalInput setFormArray={setFormArray} key={index} formValue={value } type="number" />
            })}
          </div>
          <div className="modal_div">
            <button className="modal_btn disable" type="submit">
              <p className="modal_btn_p">запросить код повторно</p>
            </button>
          </div>
        </form>
        <p className="modal_p_grey">
          запросить код повторно
        </p>
        <h2 className="modal_p_grey timer" >{timer}</h2>
      </div>
    </ModalIcon>
  );
}
