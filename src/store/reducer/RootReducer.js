import { combineReducers } from "redux";
import cartAllReducer from "./CartAllReducer";
import productReducer from "./ProductReducer";

const rootReducer=combineReducers(
    {

        cartAllReducer,
        productReducer
    }
)

export default rootReducer;