import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./../reducer";

const middleware = applyMiddleware(thunkMiddleware);

const configureStore = state => {
    return createStore(reducers, state, middleware);
};

export default configureStore;
