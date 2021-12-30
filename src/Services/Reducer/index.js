import { combineReducers } from "redux"; 

import categoryitems from "./categoryReducer";
import keyValue from "./keyreducer";

export default combineReducers({
    categoryitems,
    keyValue,
});