import React from "react";
import "./MainPage.scss";
import Header from "../Header/Header";
import Button from "./Button"
import {Link } from 'react-router-dom';
class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="body">
          <div className="text">IMPROVE YOUR DIGITAL SERVICES. </div>
          <div className="text">INCREASE YOUR COMPETITIVE EDGE. </div>
          <Link to="/graph"><button className="B">Explore</button></Link>
        </div>
        
      </div>
    );
  }
}

export default MainPage;
