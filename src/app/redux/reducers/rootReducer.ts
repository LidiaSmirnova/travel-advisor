import {combineReducers, Reducer} from 'redux';
import {AppState} from '../types/AppState';
import placeReducer from "./placeReducer";

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    places: placeReducer
});

export default rootReducer;
