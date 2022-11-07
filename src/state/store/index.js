import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducers/entries-reducer";

const reducers = combineReducers({
 entries: entriesReducer,
});

const store = createStore(reducers);

export default store;
