import {PlaceAction, PlacesState} from "../types/PlacesTypes";
import {
    ADD_PLACE_TO_PLAN,
    ADD_PLACES,
    REMOVE_PLACE_FROM_PLAN,
    SET_ACTIVE_PLACE,
} from "../types/actionTypes";

const initialState: PlacesState = {
    places: [],
    tripPlan: [],
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
                activePlace: action.place
            };
        case ADD_PLACE_TO_PLAN: {
            let newPlan = [...state.tripPlan, action.place];
            return {
                ...state,
                tripPlan: Array.from(new Set(newPlan))
            };
        }
        case REMOVE_PLACE_FROM_PLAN:
            return {
                ...state,
                tripPlan: [...state.tripPlan.filter((place) => place.placeId !== action.place.placeId)]
            };
        default:
            return state;
    }
}

export default placeReducer;