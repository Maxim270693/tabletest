import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "../reducers/postReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    post: postReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk));