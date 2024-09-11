import classes from "./MyInput.module.scss";
export default function MyInput({state,setState,children, ...props}) {
  return (
    <input {...props} value={state} onChange={(e)=>{setState(e.target.value)}} className={classes.container_form_input}/>
  );
}
