import classes from "./MyInput.module.scss";
export default function MyInput({children, ...props}) {
  return (
    <input {...props} className={classes.container_form_input}>
      {children}
    </input>
  );
}
