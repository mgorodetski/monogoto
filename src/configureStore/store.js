import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { accountReducer } from "../reducers/accountReducer";
import { composeWithDevTools } from "redux-devtools-extension";


export const initialState = {
    symbolsData: [],
    itemsData: [],
    passkey: "",
    msg: "",
}
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(accountReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

