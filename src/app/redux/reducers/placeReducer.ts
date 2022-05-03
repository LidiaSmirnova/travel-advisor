import {PlaceAction, PlacesState} from "../types/PlacesTypes";
import {ADD_PLACES} from "../types/actionTypes";

const initialState: PlacesState = {
    places: []
};

function placeReducer(
    state: PlacesState = initialState,
    action: PlaceAction
): PlacesState {
    switch (action.type) {
        case ADD_PLACES:
            return {
                places: [...action.places]
            };
        default:
            return state;
    }
}

export default placeReducer;