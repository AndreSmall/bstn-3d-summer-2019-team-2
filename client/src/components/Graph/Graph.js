import React from 'react';

import { Redirect } from "react-router-dom";

class Graph extends React.Component {

    state = {
        toDashboard: false,
        province: "Ontario"
    }

    componentDidMount() {
        this.initViz()
    }


    initViz() {
        const vizUrl = 'https://public.tableau.com/views/Book1_15659692894260/Sheet1?:showVizHome=no&:embed=true';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)

    }


    handleSubmit = () => {
        this.setState({
            toDashboard: true
        })
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/recommendation'/>
        }

        return (
            <>

            <div ref={(div) => { this.vizContainer = div }}></div>
            

            <div>
                <button onClick={this.handleSubmit}>Hello</button>
            </div>
            </>
            )
    }
}
export default Graph;