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
  render() {
    const { label, id, onChange } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} onChange={onChange}>
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
