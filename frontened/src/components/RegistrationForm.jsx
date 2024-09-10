import MyInput from "../ui/input/MyInput";
import MyButton from "../ui/button/MyButton";
export default function RegistrationForm({name ,surname,email,setName,setSurname,setEmail,handleSubmit,...props}) {
  return (
    <form {...props} className="container_form" onSubmit={handleSubmit}>
      <MyInput state={name} setState={setName} placeholder="Имя" type="text" required></MyInput>
      <MyInput
        state={surname}
        setState={setSurname}
        placeholder="Фамилия"
        type="text"
        required
      />
      <MyInput
        state={email}
        setState={setEmail}
        placeholder="Эл. почта"
        type="email"
        required
      />
      <div className="container_form_div_btn">
        <MyButton type="submit">Регистрация</MyButton>
      </div>
    </form>
  );
}
