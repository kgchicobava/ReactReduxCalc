import React, { Component } from 'react';
import {connect} from "react-redux";
import {dot, plus, minus, multiply, divide, equal, clear} from "../actions/calcActions";
import store from "../store";

class Operator extends Component {
  onClick = () => {
    switch (this.props.operator) {
      case ".":
          this.props.dot(store.getState().argumentBefore);
          break;
      case "+":
          this.props.plus(store.getState().argumentBefore, store.getState().result);
          document.querySelector("#mainDisplay").value = store.getState().result;
          break;
      case "-":
          this.props.minus(store.getState().argumentBefore, store.getState().result);
          document.querySelector("#mainDisplay").value = store.getState().result;
          break;
      case "*":
          this.props.multiply(store.getState().argumentBefore, store.getState().result ? store.getState().result : 1);
          document.querySelector("#mainDisplay").value = store.getState().result;
          break;
      case "/":
          this.props.divide(store.getState().argumentBefore ? store.getState().argumentBefore: 1, store.getState().result);
          document.querySelector("#mainDisplay").value = store.getState().result;
          break;
      case "=":
          this.props.equal(store.getState().argumentBefore, store.getState().currentOperator, store.getState().result);
          document.querySelector("#mainDisplay").value = store.getState().result;
          break;
      case "CA":
          this.props.clear();
          break;
      default:
          return null;
  }
  }


  render() {
    return (
      <div>
        <button className="Button" onClick={this.onClick.bind(this)}>{this.props.operator}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, {dot, plus, minus, multiply, divide, equal, clear})(Operator);