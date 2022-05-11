import {combineReducers, Reducer} from 'redux';
import {AppState} from '../types/AppState';
import placeReducer from "./placeReducer";
import appModeReducer from "./appModeReducer";

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    places: placeReducer,
    appModes: appModeReducer
});

export default rootReducer;
