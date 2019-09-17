import React from "react";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  onChangeHandler = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { label, placeholder, id } = this.props;

    return (
      // TODO: Take care of enter key
      <form>
        <label>{label}</label>
        <input
          type="text"
          onChange={this.onChangeHandler}
          placeholder={placeholder}
          id={id}
        />
      </form>
    );
  }
}

export default InputText;
