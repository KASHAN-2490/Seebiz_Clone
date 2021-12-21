import { combineReducers } from "redux"; 

import clickeditems from "./clickreducer";
import keyValue from "./keyreducer";

export default combineReducers({
    clickeditems,
    keyValue,
});