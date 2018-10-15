import {
    DIVIDE,
    MULTIPLY,
    ADD,
    MINUS,
    EQUALS,
    CANCEL,
    CLEAR,
    NUMBER,
    DOT,
    DOT_REMOVE,
    SET_RESULT,
    EXPO,
    SQRT,
    PERCENTAGE,
    FACTORIAL,
    INVERT
} from "../actions/types";
const initialState = {
    isDot: false,
    argumentBefore: "",
    argumentAfter: 0,
    currentOperator: "",
    result: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DIVIDE:
            return {
                ...state,
                result: action.val ? action.val : action.argBefore,
                argumentBefore: "",
                currentOperator: "/",
                isDot: false
            };

        case MULTIPLY:
            return {
                ...state,
                result: action.res,
                argumentBefore: "",
                currentOperator: "*",
                isDot: false
            };

        case ADD:
            return {
                ...state,
                result: action.res,
                argumentBefore: "",
                currentOperator: "+",
                isDot: false
            };

        case MINUS:
            return {
                ...state,
                result: action.value ? action.value : action.argBefore,
                currentOperator: "-",
                isDot: false,
                argumentAfter: action.value,
                argumentBefore: ""
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
                isDot: false,
                argumentBefore: "",
                argumentAfter: 0,
                currentOperator: "",
                result: ""
            };

        case NUMBER:
            return {
                ...state,
                argumentBefore: action.num
            };

        case EXPO:
            return {
                    ...state,
                    isDot: false,
                    result: action.res,
                    argumentBefore: "",
                    currentOperator: "^"    
            }

        case SQRT:
            return {
                   ...state,
                   isDot: false,
                   result: action.res,
                   argumentBefore: "",
                   currentOperator: "√" 
            }

        case PERCENTAGE:
            return {
                    ...state,
                    isDot: false,
                    result: action.res,
                    argumentBefore: "",
                    currentOperator: "%"
            }

        case FACTORIAL:
            return {
                  ...state,
                  isDot: false,
                  result: action.res,
                  argumentBefore: "",
                  currentOperator: "!"  
            }

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

        case SET_RESULT:
            return {
                ...state,
                result: parseFloat(action.value)
            }

        case INVERT: 
        return {
            ...state,
            argumentBefore: action.res
        }
        default:
            return state;
    }
}

function operate(first, operator, second) {
    first = parseFloat(first);
    second = parseFloat(second);
    console.log(`first ${first} second ${second}`)
    switch (operator) {
        case "+":
            return (first ? first : 0) + (second? second : 0);

        case "-":
            return (second ? second : 0) - (first ? first : 0);

        case "*":
            return (first? first : 1) * (second ? second : 1);

        case "/":
            return (second? second : 1) / (first ? first : 1);

        case "^":
            return  (second ? second : 1) ** (first? first : 1);

        case "%":
        console.log(`first ${first} second ${second}`)
        return (second/100)*first;
        default:
            return 0;
    }
}