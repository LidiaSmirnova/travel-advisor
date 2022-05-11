import {PlacesState} from "./PlacesTypes";
import {AppModesState} from "./AppModeTypes";

export interface AppState {
    places: PlacesState,
    appModes: AppModesState
}