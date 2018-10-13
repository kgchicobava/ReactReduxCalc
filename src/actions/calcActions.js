import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT} from "./types";
import store from "../store";
import * as math from "mathjs";
export const number = (num) => dispatch => {
    dispatch({type: NUMBER, num});
};

export const dot = (argBefore) => dispatch => {
    let dotted;
    console.log("me " + math.eval("4.0"));
    if(!store.getState().isDot) {
        dotted = argBefore + ".";
    }
    dispatch({type: DOT, argBefore: dotted});
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

export const divide = (argBefore, result) => dispatch => {
    dispatch({type: DIVIDE, argBefore, result});
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
