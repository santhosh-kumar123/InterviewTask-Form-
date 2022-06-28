import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import formJson from "../backend/formElements.json"
import Element from "./Element";
import { FormContext } from "../FormContext"
function DynamicForm() {
  const [state, setstate] = useState();
  const [submit,setSubmit]=useState(true)
  useEffect(() => {
    setstate(formJson[0]);
  }, []);
  const { fields, formHeading } = state ?? {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (submit) {
      alert("fill all the fields properlly")
    }
    else {
      alert("successfully Registered")
    }
    setSubmit(!state)
  }
  const handleChange = (id, e) => {
    const newElements = { ...state }
    newElements.fields.forEach(field => {
      const { type, id } = field;
      if (id === id) {
        switch (type) {
          case "text":
            fields["value"] = e.target.value;
            break;
          case "number":
            fields["value"] = e.target.value;
            break;
          case "radio":
            fields["value"] = e.target.value;
            break;
          case "select":
            fields["value"] = e.target.value;
            break;
          case "textarea":
            fields["value"] = e.target.value;
            break;
          default:
            fields["value"] = e.target.value;
            break;
        }
      }
      setstate(newElements)

    })
    console.log(state);
  }
  return (
    <FormContext.Provider value={{handleChange}}>
      <>
        <h2 style={{width:"500px",textAlign:"center"}}>{formHeading}</h2>
        <Form onSubmit={handleSubmit}
          noValidate="true"
          style={{
            width: "500px",height:"760px", backgroundColor: "#fff",
            padding:"10px",border:"1px solid",borderRadius:"15px",boxShadow:"0px 0px 5px 0px"
          }}
        >
          {fields
            ? fields.map((field, i) => <Element key={i} field={field} />)
            : null}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    </FormContext.Provider>
  );
}

export default DynamicForm;
