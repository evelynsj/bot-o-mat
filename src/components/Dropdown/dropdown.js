import React from "react";
import {
  UNIPEDAL,
  BIPEDAL,
  QUADRUPEDAL,
  ARACHNID,
  RADIAL,
  AERONAUTICAL
} from "../../constants/RobotTypes";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "" };
  }

  onChangeHandler = e => {
    this.setState({ type: e.target.value });
  };

  render() {
    const { label, id } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} onChange={this.onChangeHandler}>
          <option>{UNIPEDAL}</option>
          <option>{BIPEDAL}</option>
          <option>{QUADRUPEDAL}</option>
          <option>{ARACHNID}</option>
          <option>{RADIAL}</option>
          <option>{AERONAUTICAL}</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
