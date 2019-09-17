import React from "react";
import InputText from "../InputText/inputText";

class InputForm extends React.Component {
  render() {
    const LABEL = "Enter robot name: ";
    const PLACEHOLDER = "WALL-E";
    const ID = "Name";
    return <InputText label={LABEL} placeholder={PLACEHOLDER} id={ID} />;
  }
}

export default InputForm;
