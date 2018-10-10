import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT} from "../actions/types";

const initialState = {
    isDot: false,
    argumentBefore: 0,
    argumentAfter: 0,
    currentOperator: "",
    result : 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DIVIDE:
        return {
            ...state,
            argumentAfter : parseInt(action.argBefore),
            argumentBefore : 0,
            currentOperator: "/"
        };
        break;

        case MULTIPLY:
        return {
            ...state,
            argumentAfter : parseInt(action.argBefore),
            argumentBefore : 0,
            currentOperator: "*"
        };
        break;

        case ADD:
        return {
            ...state,
            argumentAfter : parseInt(action.argBefore),
            argumentBefore : 0,
            currentOperator: "+"
        };
        break;

        case MINUS:
        return {
            ...state,
            argumentAfter : parseInt(action.argBefore),
            argumentBefore : 0,
            currentOperator: "-"
        };
        break;

        case EQUALS:
        return {
            ...state,
            isDot: false,
            argumentBefore: 0,
            argumentAfter: 0,
            currentOperator: "",
            result: parseInt(`${action.argBefore} ${action.operator} ${action.argAfter}`)
        };
        break;

        case CANCEL:
        return {
            ...state,
            argumentBefore: parseInt((""+action.argBefore).slice(0, -1))
        };
        break;

        case CLEAR:
        return {
            ...state,
            isDot: false,
            argumentBefore: 0,
            argumentAfter: 0,
            currentOperator: "",
            result : 0
        };
        break;

        case NUMBER:
        return {
            ...state,
            argumentBefore: parseInt(action.argBefore + action.num)
        };
        break;

        case DOT:
        return {
            ...state,
            isDot: true
        };
        break;

        default:
        return state;
        break;
    }
}