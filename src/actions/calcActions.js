import {DIVIDE, MULTIPLY, ADD, MINUS, EQUALS, CANCEL, CLEAR, NUMBER, DOT, DOT_REMOVE, SET_RESULT} from "./types";
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

export const plus = (argBefore = 0, result = 0) => dispatch => {
    const res = parseFloat(argBefore? argBefore : 0) + parseFloat(result? result : 0)
    dispatch({type: ADD, res});
}
export const minus = (argBefore, result) => dispatch => {
    console.log(`argbefore ${argBefore} result ${result}`)
    if(result === "") {
        dispatch({type: SET_RESULT, value: argBefore});
    }
    
    let value = store.getState().result - argBefore;
    console.log(value)
    dispatch({type: MINUS, value, argBefore})
}


export const multiply = (argBefore, result = 1) => dispatch => {
    const res = parseFloat(argBefore * result);
    dispatch({type: MULTIPLY, res});
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
