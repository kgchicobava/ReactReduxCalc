import React, { Component } from 'react';
import './App.css';
import Display from "./components/Display";
import KeyBoard from "./components/KeyBoard";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <KeyBoard />
      </div>
    );
  }
}

export default App;
