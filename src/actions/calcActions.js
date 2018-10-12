import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT} from "./types";

export const number = (num) => dispatch => {
    dispatch({type: NUMBER, num});
};

export const dot = () => dispatch => {
    dispatch({type: DOT})
};

export const plus = (argBefore, result) => dispatch => {
    dispatch({type: ADD, argBefore, result});
}

export const minus = (argBefore, result) => dispatch => {
    dispatch({type: MINUS, argBefore, result});
}

export const multiply = (argBefore, result) => dispatch => {
    dispatch({type: MULTIPLY, argBefore, result});
}

export const divide = () => dispatch => {
    dispatch({type: DIVIDE});
}

export const equal = (argBefore, operator, argAfter) => dispatch => {
    dispatch({type: EQUALS, argBefore, argAfter, operator});
}

export const cancel = ()=> dispatch => {
    dispatch({type: CANCEL});
}

export const clear = () => dispatch => {
    dispatch({type: CLEAR});
}
