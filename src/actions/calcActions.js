import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT} from "./types";

export const number = (num) => dispatch => {
    dispatch({type: NUMBER, num});
};

export const dot = () => dispatch => {
    dispatch({type: DOT})
};

export const plus = (argBefore) => dispatch => {
    dispatch({type: ADD, argBefore});
}

export const minus = (argBefore) => dispatch => {
    dispatch({type: MINUS, argBefore});
}

export const equal = (argBefore, operator, argAfter) => dispatch => {
    dispatch({type: EQUALS, argBefore, argAfter, operator});
}

export const clear = () => dispatch => {
    dispatch({type: CLEAR});
}

// TODO може спочатку треба було екшни зробити