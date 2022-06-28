import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { FormContext } from "../../FormContext";

function Select({ type, id, label, validations, options }) {
   const { handleChange } = useContext(FormContext);
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={e => {
          handleChange(id, e);
        }}
        required
      >
        <option>choose</option>
        {options.length > 0 &&
          options.map((option, i) => 
            <option value={option.label} key={i}>
              {option.label}
            </option>
          )}
      </Form.Select>
    </>
  );
}

export default Select;
