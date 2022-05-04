import {PlaceAction, PlacesState} from "../types/PlacesTypes";
import {ADD_PLACES, SET_ACTIVE_PLACE} from "../types/actionTypes";

const initialState: PlacesState = {
    places: [],
    activePlace: null
};

function placeReducer(
    state: PlacesState = initialState,
    action: PlaceAction
): PlacesState {
    switch (action.type) {
        case ADD_PLACES:
            return {
                ...state,
                places: [...action.places]
            };
        case SET_ACTIVE_PLACE:
            return {
                ...state,
                activePlace: action.activePlace
            };
        default:
            return state;
    }
}

export default placeReducer;