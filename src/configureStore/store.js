import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { accountReducer } from "../reducers/accountReducer";


export const initialState = {
    symbolsData: [],
    itemsData: [],
    passkey: "",
    msg: "",
}


export const store = createStore(accountReducer, initialState, applyMiddleware(thunk));

