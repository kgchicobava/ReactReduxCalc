import React, { Component } from 'react';
import './sass/App.scss';
import Display from "./components/Display";
import store from "./store";
import {Provider} from "react-redux";
import Layout from "./components/Layout"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Display />
        <Layout />
        <a href="https://github.com/kgchicobava/ReactReduxCalc" className="link">Source Code</a>
      </div>
      </Provider>
    );
  }
}

export default App;
