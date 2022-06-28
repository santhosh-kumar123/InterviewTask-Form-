import React from 'react'
import Input from "./Elements/Input";
import CheckBox from './Elements/CheckBox';
import Select from './Elements/Select';
import TextArea from './Elements/TextArea';

const Element = ({ field: { type ,id,label,validations,options} }) => {
    switch (type) {
      case "text":
        return <Input id={id} label={label} validations={validations} />;
      case "number":
        return <Input id={id} label={label} validations={validations} />;

      case "radio":
        return (
          <CheckBox
            id={id}
            label={label}
            validations={validations}
            options={options}
          />
        );
      case "select":
        return (
          <Select
            id={id}
            label={label}
            validations={validations}
            options={options}
          />
        );
      case "textArea":
        return <TextArea id={id} label={label} />;
      default:
        return null;
    }
}

export default Element