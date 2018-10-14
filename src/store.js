import {
    createStore,
    compose,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/mainReducer";

const iniialState = {
    isDot: false,
    argumentBefore: "",
    argumentAfter : 0,
    currentOperator: "",
    dilene: 0,
    dilnuk: 0,
    zmenshuvane: 0,
    videmnik: 0,
    result: ""
};
const middleware = [thunk];

const store = createStore(mainReducer, iniialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;