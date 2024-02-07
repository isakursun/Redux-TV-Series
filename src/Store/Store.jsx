import { createStore, combineReducers, applyMiddleware } from "redux";
import { seriesReducer } from "./Reducers/SeriesReducer";
import { detailReducer } from "./Reducers/DetailReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ seriesReducer, detailReducer });

export default createStore(rootReducer, applyMiddleware(thunk));
