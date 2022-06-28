import React, { useContext } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { FormContext } from "../../FormContext";
const TextArea = ({ id, label, validations }) => {
  const { handleChange } = useContext(FormContext);
  // handleChange()
  return (
    <div>
      <FloatingLabel
        controlId="floatingTextarea"
        // label="Comments"
        className="mb-3"
      >
        <Form.Label id={id}>{label}</Form.Label>
              <Form.Control
            placeholder="Leave a comment here"
          style={{ height: '100px',marginTop:"10px" }}
          onChange={e => {
            handleChange(id, e);
          }}
          required
          id={id}
        />
        <Form.Text className="text-muted"></Form.Text>
      </FloatingLabel>
    </div>
  );
};

export default TextArea;
