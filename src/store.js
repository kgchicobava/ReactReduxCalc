import {
    createStore,
    compose,
    applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/mainReducer";

const iniialState = {
    isDot: false,
    argumentBefore: 0,
    currentOperator: "",
    result: 0
};
const middleware = [thunk];

const store = createStore(mainReducer, iniialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;