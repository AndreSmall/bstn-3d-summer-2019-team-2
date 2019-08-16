import tableau from 'tableau-api';
import React from 'react';


class Graph2 extends React.Component {
    
    componentDidMount() {
        this.initViz()
    }


    initViz() {
        const vizUrl = '';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)

    }


    render() {
        return (
            <>


    
            </>
            )
    }
}
export default Graph2;