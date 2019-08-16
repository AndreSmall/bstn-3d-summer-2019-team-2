import React from 'react';
import "./Header.scss";
import img from "../../assets/img/Logo.svg"
class Header extends React.Component {
    render () {
        return (
        <div className="header">
        <div className="wrapper">
            <img className="img" src={img} alt="Logo"></img>
         <div className="header-text">ABOUT US</div>
         <div className="header-text">OUR WORK</div>
         <div className="header-text">SERVICES</div>
         <div className="header-text">CAREERS</div>
         <div className="header-text">CONTACT</div>
         </div>
        </div>
        )
    }
}

export default Header;