import React from "react";
import "./Button.scss";

class Button extends React.Component {
  state = { colorChange: false };
  toggle = () => {
    if (this.state.colorChange === false) {
      this.setState({ colorChange: true });
    } else if (this.state.colorChange === true) {
      this.setState({ colorChange: false });
    }
  };
  render() {
    let classVariable;
    let buttonBlue = "button-color";
    let buttonRed = "button-red";
    if (this.state.colorChange === true) {
      classVariable = buttonRed;
    } else if (this.state.colorChange === false) {
      classVariable = buttonBlue;
    }
    return (
      <>
        <button className={classVariable} onClick={this.toggle} type="button">
        {this.props.buttonName}
        </button>
      </>
    );
  }
}

export default Button;
