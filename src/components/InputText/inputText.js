import React from "react";

class InputText extends React.Component {
  render() {
    const { label, placeholder, id, onChange } = this.props;

    return (
      // TODO: Take care of enter key
      <form>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          id={id}
        />
      </form>
    );
  }
}

export default InputText;
