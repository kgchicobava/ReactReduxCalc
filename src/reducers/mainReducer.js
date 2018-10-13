import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT, DOT_REMOVE} from "../actions/types";
const initialState = {
    isDot: false,
    argumentBefore: "",
    argumentAfter: 0,
    currentOperator: "",
    result : 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DIVIDE:
        return {
            ...state,
            result : action.result / action.argBefore,
            argumentBefore : "",
            currentOperator: "/"
        };

        case MULTIPLY:
        return {
            ...state,
            result : parseFloat(action.argBefore * action.result),
            argumentBefore : "",
            currentOperator: "*"
        };

        case ADD:
        return {
            ...state,
            result : parseFloat(action.argBefore + action.result),
            argumentBefore : "",
            currentOperator: "+"
        };

        case MINUS:
        return {
            ...state,
            result : - (action.result - action.argBefore),
            argumentBefore : "",
            currentOperator: "-"
        };

        case EQUALS:
        return {
            ...state,
            isDot: false,
            argumentBefore: "",
            currentOperator: "",
            result: operate(action.argBefore, action.operator, action.argAfter)
        };

        case CANCEL:
        return {
            ...state,
            argumentBefore: action.argBefore ? action.argBefore : ""
       };

        case CLEAR:
        return {
            ...state,
            isDot: false,
            argumentBefore: "",
            currentOperator: "",
            result : 0
        };

        case NUMBER:
        return {
            ...state,
            argumentBefore: action.num
        };

        case DOT:
        return {
            ...state,
            isDot: true,
            argumentBefore: action.argBefore
        };

        case DOT_REMOVE:
        return {
            ...state,
            isDot: false
        }

        default:
        return state;
    }
}

function operate(first, operator, second) {
    first = parseFloat(first);
    second = parseFloat(second);
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