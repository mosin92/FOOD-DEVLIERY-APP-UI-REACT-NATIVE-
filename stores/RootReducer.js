import { combineReducers } from "redux";
import { TabReducer } from "./Tab/tabReducer";

const rootReducer = combineReducers({
    tabAction: TabReducer
})

export default rootReducer