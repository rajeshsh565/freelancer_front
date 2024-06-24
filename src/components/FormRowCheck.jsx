import { useSubmit } from "react-router-dom";

const FormRowCheck = ({ name, label }) => {
    const submit = useSubmit();
  return (
    <div>
      <input type="checkbox" id={name} name={name} onChange={(e)=>submit(e.currentTarget.form)}/>
      <label htmlFor={name} className="ms-2">
        {label}
      </label>
    </div>
  );
};
export default FormRowCheck;