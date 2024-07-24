import ModalIcon from "../pages/Modal";
import MyModalInput from "../ui/modalInput/MyModalInput";
export default function ConfirmationForm({ active,setActive,handleSubmit,...props }) {
  return (
    <ModalIcon active={active} setActive={setActive}>
      <div className="modal_container">
        <p className="modal_p">
          введите одноразовый код отправленный на эл. почту
        </p>
        <form onSubmit={handleSubmit}>
          <div className="modal_form">
            <MyModalInput id="fs" type="number" />
            <MyModalInput id="sc" type="number" />
            <MyModalInput id="tr" type="number" />
            <MyModalInput id="fr" type="number" />
          </div>
          <div className="modal_div">
            <button className="modal_btn disable" id="modal_btn" type="submit">
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
  );
}
