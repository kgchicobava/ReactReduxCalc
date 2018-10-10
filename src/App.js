import React, { Component } from 'react';
import './App.css';
import Display from "./components/Display";
import KeyBoard from "./components/KeyBoard";
import Operators from "./components/Operators";
import store from "./store";
import {Provider} from "react-redux";


class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <div className="App">
        <Display />
        <div className="flex">
          <KeyBoard />
          <Operators />
        </div>
      </div>
      // </Provider>
    );
  }
}

export default App;
