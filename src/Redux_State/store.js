import { legacy_createStore } from "redux";
import combinedReducers from "redux";
import modereducer from "./Reducers/reducer";
import * as action from "./ActionCreators/actioncreators"; 

const allReducers = combinedReducers({
    mode: modereducer
})