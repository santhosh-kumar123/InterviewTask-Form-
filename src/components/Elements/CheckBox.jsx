import React, { useContext } from 'react'
import { Form } from 'react-bootstrap';
import { FormContext } from '../../FormContext';

const CheckBox = ({id, label, options }) => {
   const { handleChange } = useContext(FormContext);
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label htmlFor="gender">{label}</Form.Label>
        {options.length > 0 &&
          options.map((option, i) => (
            <div style={{display:'flex'}}>
              <Form.Check
                type="radio"
                value={option.label}
                id={id}
                onChange={e => {
                  handleChange(id, e);
                }}
                name={id}
                required
              />
              <Form.Label key={i}>{option.label}</Form.Label>
            </div>
          ))}
      </Form.Group>
    </div>
  );
};

export default CheckBox