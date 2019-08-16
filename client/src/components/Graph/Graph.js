import React from 'react';
import tableau from 'tableau-api';
import { Redirect } from "react-router-dom";
import Graph1 from './Graph1.js'
import Graph2 from './Graph2.js'
import Graph3 from './Graph3.js'
import './Graph.scss'

class Graph extends React.Component {

    state = {
        toDashboard: false,
        province: "ON"
    }



    ONSubmit = () => {
        this.setState({
            province: "ON"
        })
    }

    BCSubmit = () => {
        this.setState({
            province: "BC"
        })
    }

    ALSubmit = () => {
        this.setState({
            province: "AL"
        })
    }

    provinceChooser = (province) => {
        this.setState({
            province: province
        })
    }


    handleSubmit = () => {
        this.setState({
            toDashboard: true
        })
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/recommendation' />
        }



        return (
            <>


                <div className="buttonBox">
                    <button className="button" onClick={() => { this.provinceChooser("BC") }}>BC</button>
                    <button className="button" onClick={() => { this.provinceChooser("AB") }}>AB</button>
                    <button className="button" >SK</button>
                    <button className="button" >MB</button>
                    <button className="button" onClick={() => { this.provinceChooser("ON") }}>ON</button>
                    <button className="button">QC</button>
                    <button className="button">NB</button>
                    <button className="button">NL</button>
                    <button className="button">NS</button>
                    <button className="button">PE</button>
                    <button className="button">YT</button>
                    <button className="button">NT</button>
                    <button className="button">NU</button>
                </div>

                {this.state.province === "ON" ? <Graph1 className="graph"/> : null}
                {this.state.province === "AB" ? <Graph2 className="graph"/> : null}
                {this.state.province === "BC" ? <Graph3 className="graph"/> : null}


                <div className="checkBox">
                    <button className="bottombtn" onClick={this.handleSubmit}>Explore Now</button>
                </div>



            </>
        )
    }
}
export default Graph;