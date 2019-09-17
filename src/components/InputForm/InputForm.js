import React from "react";
import InputText from "../InputText/inputText";
import Dropdown from "../Dropdown/dropdown";
import { NAME_INPUT, DROPDOWN } from "../../constants/InputConstants";

class InputForm extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Enter Robot Information</legend>
          <InputText
            label={NAME_INPUT.label}
            placeholder={NAME_INPUT.placeholder}
            id={NAME_INPUT.id}
          />
          <Dropdown label={DROPDOWN.label} id={DROPDOWN.id} />
        </fieldset>
      </div>
    );
  }
}

export default InputForm;
