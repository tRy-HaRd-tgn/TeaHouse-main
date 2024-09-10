import classes from "./MyModalInput.module.scss";
export default function MyModalInput({setFormArray,formValue, children, ...props }) {
  return (
    <input {...props} value={formValue} onChange={checkLen} className={classes.modal_form_input}/>
  
  );
}
function checkLen(e) {
  if (e.target.value.length > 1) {
    e.target.value = e.target.value.slice(0, -1);
  }
  
}
