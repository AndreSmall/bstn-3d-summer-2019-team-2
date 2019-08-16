import React from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Graph from './components/Graph/Graph.js'
import Details from './components/recomendation/Details.js'
import "./components/MainPage/MainPage.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/graph" component={Graph} />
          <Route path="/recommendation" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
