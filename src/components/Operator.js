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
    factorial,
    invert
} from "../actions/calcActions";
import store from "../store";

// this made for better code look
const localState = {};
store.subscribe(() => {
    Object.assign(localState, {}, store.getState());
})

class Operator extends Component {
    onClick = () => {
        switch (this.props.operator) {

            case ".":
                this.props.dot(localState.argumentBefore);
                break;

            case "+":
                this.props.plus(localState.argumentBefore, localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "-":
                this.props.minus(localState.argumentBefore, localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "*":
                this.props.multiply(localState.argumentBefore , localState.result ? localState.result : 1);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "/":
                this.props.divide(localState.argumentBefore , localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "^":
                this.props.expo(localState.argumentBefore, localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "√":
                this.props.sqrt(localState.argumentBefore);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "%":
                this.props.percentage(localState.argumentBefore, localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "!":
                this.props.factorial(localState.argumentBefore);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "=":
                this.props.equal(localState.argumentBefore, store.getState().currentOperator, localState.result);
                document.querySelector("#mainDisplay").value = localState.result;
                break;

            case "CA":
                this.props.clear();
                break;

            case "C":
                this.props.cancel(localState.argumentBefore);
                break;

            case "+/-":
                this.props.invert(localState.argumentBefore);
                break;

            default:
                return null;
        }
    }

  render() {
    return (
      <div>
        <button className={this.props.operatorAccent + " Button"} onClick={this.onClick.bind(this)}>{this.props.operator}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, {dot, plus, minus, multiply, divide, equal, clear, cancel, expo, sqrt, percentage, factorial, invert})(Operator);