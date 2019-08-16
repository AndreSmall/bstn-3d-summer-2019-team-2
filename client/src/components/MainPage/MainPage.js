import React from "react";
import './MainPage.scss';

class MainPage extends React.Component {
    state = { colorChange: false }
    toggle = () => {
        if (this.state.colorChange === false) {
            this.setState({ colorChange : true })
        } else if (this.state.colorChange === true) {
            this.setState({ colorChange : false})
        }
    }
    render () {
        let classVariable;
        let buttonBlue = "button-color";
        let buttonRed = "button-red";
        if (this.state.colorChange === true) {
            classVariable = buttonRed
        } else if (this.state.colorChange === false) {
            classVariable = buttonBlue
        }
        return (
            <>
            <div className="mainpage-wrapper">
            <input type="text" name="mainPageInput" placeholder="Search"/>
            <button className="mainpage-wrapper__button" onClick={this.toggle} type="button" name="mainPageButton">Enter</button>
            <button className={classVariable} onClick={this.toggle} type="button">toggle</button>
            </div>
            </>
        )
    }
}

export default MainPage;