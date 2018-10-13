import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT, DOT_REMOVE} from "./types";
import store from "../store";
export const number = (num) => dispatch => {
    dispatch({type: NUMBER, num});
};

export const dot = (argBefore) => dispatch => {
    let dotted;
    try {if(!store.getState().isDot) {
        dotted = argBefore + ".";
        dispatch({type: DOT, argBefore: dotted});
    }} catch(err) {
        console.err(err);
    }
    
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

export const cancel = (argBefore)=> dispatch => {
    // console.log(`argBef ${argBefore}`)
    let last = argBefore.toString()[argBefore.length-1];
    let value = (""+argBefore).slice(0, -1);
    if(last === ".") {
        dispatch({type: DOT_REMOVE});
    }
    
    dispatch({type: CANCEL, argBefore: value});
}

export const clear = () => dispatch => {
    dispatch({type: CLEAR});
}
