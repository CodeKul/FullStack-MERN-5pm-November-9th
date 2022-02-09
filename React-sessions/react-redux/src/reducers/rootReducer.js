import { combineReducers } from "redux";
import { authenticationReducer } from "./authenticationReducer";
import { bankReducer } from "./bankReducer";




export const rootReducer = combineReducers({
    authenticate: authenticationReducer,
    bank: bankReducer
})