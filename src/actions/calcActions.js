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
} from "./types";
import store from "../store";
import * as math from "mathjs";
export const number = (num) => dispatch => {
    dispatch({
        type: NUMBER,
        num
    });
};

export const dot = (argBefore) => dispatch => {
    let dotted;
    try {
        if (!store.getState().isDot) {
            dotted = argBefore + ".";
            dispatch({
                type: DOT,
                argBefore: dotted
            });
        }
    } catch (err) {
        console.err(err);
    }

};

export const plus = (argBefore = 0, result = 0) => dispatch => {
    const res = parseFloat(argBefore ? argBefore : 0) + parseFloat(result ? result : 0)
    dispatch({
        type: ADD,
        res
    });
};
export const minus = (argBefore, result) => dispatch => {
    if (result === "") {
        dispatch({
            type: SET_RESULT,
            value: argBefore
        });
    }

    let value = store.getState().result - argBefore;
    console.log(value)
    dispatch({
        type: MINUS,
        value,
        argBefore
    })
};

export const multiply = (argBefore, result = 1) => dispatch => {
    const res = parseFloat(argBefore ? argBefore : 1 * result);
    dispatch({
        type: MULTIPLY,
        res
    });
};

export const divide = (argBefore, result) => dispatch => {
    if (result === "") {
        dispatch({
            type: SET_RESULT,
            value: argBefore
        });
    }
    result = parseFloat(store.getState().result) / (parseFloat(argBefore) ? parseFloat(argBefore) : 1);
    dispatch({
        type: DIVIDE,
        argBefore,
        val: result === 1 ? 0 : result
    })
};

export const expo = (argBefore, result) => dispatch => {
    const res = parseFloat(argBefore ** (result? result : 1));
    dispatch({type: EXPO, res});
};

export const sqrt = (argBefore) => dispatch => {
    const res = Math.sqrt(parseFloat(argBefore));
    dispatch({type: SQRT, res});
};

export const percentage = (argBefore, result) => dispatch => {
    if (result === "") {
        dispatch({
            type: SET_RESULT,
            value: argBefore
        });}
        result = parseFloat((store.getState().result/100) * argBefore? argBefore : 1);
        console.log(`result ${result}`)
        dispatch({
            type: PERCENTAGE,
            argBefore,
            res: result
        })
};

export const factorial = (argBefore) => dispatch => {
    const res = math.factorial(parseFloat(argBefore));
    dispatch({type: FACTORIAL, res});
};

export const equal = (argBefore, operator, argAfter) => dispatch => {
    dispatch({
        type: EQUALS,
        argBefore,
        argAfter,
        operator
    });
};

export const cancel = (argBefore) => dispatch => {
    let last = argBefore.toString()[argBefore.length - 1];
    let value = ("" + argBefore).slice(0, -1);
    if (last === ".") {
        dispatch({
            type: DOT_REMOVE
        });
    }

    dispatch({
        type: CANCEL,
        argBefore: value
    });
};

export const clear = () => dispatch => {
    dispatch({
        type: CLEAR
    });
};

export const invert = (argBefore) => dispatch => {
    const res = -argBefore;
    dispatch({type: INVERT, res});
}