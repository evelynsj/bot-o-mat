import React from "react";
import InputText from "../InputText/inputText";
import Dropdown from "../Dropdown/dropdown";
import { NAME_INPUT, DROPDOWN } from "../../constants/InputConstants";
import { UNIPEDAL } from "../../constants/RobotTypes";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", type: UNIPEDAL };
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeType = e => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>Enter Robot Information</legend>
          <InputText
            label={NAME_INPUT.label}
            placeholder={NAME_INPUT.placeholder}
            id={NAME_INPUT.id}
            onChange={this.handleChangeName}
          />
          <Dropdown
            label={DROPDOWN.label}
            id={DROPDOWN.id}
            onChange={this.handleChangeType}
          />
        </fieldset>
      </div>
    );
  }
}

export default InputForm;
