import classes from "./MyModalInput.module.scss";
export default function MyModalInput({ children, ...props }) {
  return (
    <input {...props} onChange={checkLen} className={classes.modal_form_input}>
      {children}
    </input>
  );
}
function checkLen(e) {
  if (e.target.value.length > 1) {
    e.target.value = e.target.value.slice(0, -1);
  }
}
