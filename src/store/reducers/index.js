import {combineReducers} from 'redux';
import applicationReducer from "./app_reducer";

const RootReducer = combineReducers({
	global:applicationReducer,
});
export default RootReducer;