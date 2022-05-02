import {AttractionAction, AttractionsState} from "../types/AttractionsTypes";
import {ADD_ATTRACTIONS} from "../types/actionTypes";

const initialState: AttractionsState = {
    attractions: []
};

function attractionReducer(
    state: AttractionsState = initialState,
    action: AttractionAction
): AttractionsState {
    switch (action.type) {
        case ADD_ATTRACTIONS:
            return {
                attractions: [...state.attractions, ...action.attractions]
            };
        default:
            return state;
    }
}

export default attractionReducer;