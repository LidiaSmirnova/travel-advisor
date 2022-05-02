import {combineReducers, Reducer} from "redux";
import {AppState} from "../types/AppState";
import attractionReducer from "./attractionReducer";

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    attractions: attractionReducer
});

export default rootReducer;
