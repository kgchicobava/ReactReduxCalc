import React, {
    Component
} from 'react';
import {
    connect
} from "react-redux";
import {
    dot,
    plus,
    minus,
    multiply,
    divide,
    equal,
    clear,
    cancel,
    expo,
    sqrt,
    percentage,
    factorial
} from "../actions/calcActions";
import store from "../store";

const localState = {};
store.subscribe(() => {
    Object.assign(localState, {}, store.getState());
})

class Operator extends Component {
    onClick = () => {
        switch (this.props.operator) {

            case ".":
                this.props.dot(store.getState().argumentBefore);
                break;

            case "+":
                this.props.plus(localState.argumentBefore, localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
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
                this.props.divide(store.getState().argumentBefore, store.getState().result);
                document.querySelector("#mainDisplay").value = store.getState().result;
                break;

            case "^":
                this.props.expo(store.getState().argumentBefore, store.getState().result);
                document.querySelector("#mainDisplay").value = store.getState().result;
                break;

            case "√":
                this.props.sqrt(store.getState().argumentBefore);
                document.querySelector("#mainDisplay").value = store.getState().result;
                break;

            case "%":
                this.props.percentage(store.getState().argumentBefore, store.getState().result);
                document.querySelector("#mainDisplay").value = store.getState().result;
                break;

            case "!":
                this.props.factorial(store.getState().argumentBefore);
                document.querySelector("#mainDisplay").value = store.getState().result;
                break;

            case "=":
                this.props.equal(store.getState().argumentBefore, store.getState().currentOperator, store.getState().result);
                document.querySelector("#mainDisplay").value = store.getState().result;
                break;

            case "CA":
                this.props.clear();
                break;

            case "C":
                this.props.cancel(store.getState().argumentBefore);
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

export default connect(mapStateToProps, {dot, plus, minus, multiply, divide, equal, clear, cancel, expo, sqrt, percentage, factorial})(Operator);