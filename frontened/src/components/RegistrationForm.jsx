import MyInput from "../ui/input/MyInput";
import MyButton from "../ui/button/MyButton";
export default function RegistrationForm({handleSubmit,...props}) {
  return (
    <form {...props} className="container_form" onSubmit={handleSubmit}>
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
  );
}
