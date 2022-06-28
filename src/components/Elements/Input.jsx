import React, { useContext } from 'react'
import { Form } from "react-bootstrap"
import { FormContext } from '../../FormContext';
const Input = ({ id, label, validations }) => {
  const { handleChange } = useContext(FormContext)
  // handleChange()
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id={id}>{label}</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"
          onChange={e => { handleChange(id, e) }} required id={id} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
    </div>
  );
};

export default Input