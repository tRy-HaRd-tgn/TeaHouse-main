import classes from "./MyButton.module.scss";
export default function MyButton({ children, ...props }) {
  return (
    <button {...props} className={classes.container_form_btn}>
      {children}
    </button>
  );
}
