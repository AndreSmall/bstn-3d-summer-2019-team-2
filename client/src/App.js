import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Graph from './components/Graph/Graph.js'


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
