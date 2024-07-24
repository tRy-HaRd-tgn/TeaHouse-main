import classes from "./MyModalInput.module.scss";
export default function MyModalInput({ children, ...props }) {
  return (
    <input {...props} className={classes.modal_form_input}>
      {children}
    </input>
  );
}
