import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT} from "../actions/types";
import * as math from "mathjs";
const initialState = {
    isDot: false,
    argumentBefore: 0,
    argumentAfter: 0,
    currentOperator: "",
    result : 0
}

export default function(state = initialState, action) {
    console.log(math)
    switch(action.type) {
        case DIVIDE:
        return {
            ...state,
            result : action.result / action.argBefore,
            argumentBefore : 0,
            currentOperator: "/"
        };

        case MULTIPLY:
        return {
            ...state,
            result : parseFloat(action.argBefore * action.result),
            argumentBefore : 0,
            currentOperator: "*"
        };

        case ADD:
        return {
            ...state,
            result : parseFloat(action.argBefore + action.result),
            argumentBefore : 0,
            currentOperator: "+"
        };

        case MINUS:
        return {
            ...state,
            result : - (action.result - action.argBefore),
            argumentBefore : 0,
            currentOperator: "-"
        };

        case EQUALS:
        return {
            ...state,
            isDot: false,
            argumentBefore: 0,
            currentOperator: "",
            result: operate(action.argBefore, action.operator, action.argAfter)
        };

        case CANCEL:
        return {
            ...state,
            argumentBefore: parseInt((""+action.argBefore).slice(0, -1))
        };

        case CLEAR:
        return {
            ...state,
            isDot: false,
            argumentBefore: 0,
            currentOperator: "",
            result : 0
        };

        case NUMBER:
        return {
            ...state,
            argumentBefore: parseFloat(action.num)
        };

        case DOT:
        return {
            ...state,
            isDot: true
        };

        default:
        return state;
    }
}

function operate(first, operator, second) {
    first = parseInt(first);
    second = parseInt(second);
    switch(operator) {
        case "+":
        return first + second;

        case "-":
        return first - second;

        case "*":
        return first * second;

        case "/":
        return first / second;

        default:
        return null;
    }
}