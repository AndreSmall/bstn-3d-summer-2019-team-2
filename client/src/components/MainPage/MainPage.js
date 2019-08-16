import React from "react";
import './MainPage.scss';
import Button from "./Button"
class MainPage extends React.Component {
  
    render () {
        
        return (
            <>
            <div className="mainpage-wrapper">
            <input type="text" name="mainPageInput" placeholder="Search"/>
            <button className="mainpage-wrapper__button" onClick={this.toggle} type="button" name="mainPageButton">Enter</button>
            </div>
            <Button />
            </>
        )
    }
}

export default MainPage;