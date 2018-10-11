import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT} from "./types";

export const number = (argBefore, num) => dispatch => {
    dispatch({type: NUMBER, argBefore, num});
};

export const dot = () => dispatch => {
    dispatch({type: DOT})
};

// TODO може спочатку треба було екшни зробити