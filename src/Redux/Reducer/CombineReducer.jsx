import { combineReducers } from "redux";
import ItemReducer from './ItemReducer';

const MainReducer = combineReducers({
    ItemReducer,
});

export default MainReducer;