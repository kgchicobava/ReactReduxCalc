import React, { Component } from 'react';
import './App.css';
import Display from "./components/Display";
import store from "./store";
import {Provider} from "react-redux";
import Layout from "./components/Layout"
import LinkToRepo from "./components/LinkToRepo";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Display />
        <Layout />
        <LinkToRepo />
      </div>
      </Provider>
    );
  }
}

export default App;
