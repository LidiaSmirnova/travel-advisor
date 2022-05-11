import {
    ADD_PLACES,
    ADD_PLACE_TO_PLAN,
    SET_ACTIVE_PLACE,
    REMOVE_PLACE_FROM_PLAN
} from "../types/actionTypes";
import {Place} from "../types/PlacesTypes";

export function addPlaces(places: Place[]) {
    return {
        type: ADD_PLACES,
        places
    }
}

export function setActivePlace(place: Place) {
    return {
        type: SET_ACTIVE_PLACE,
        place
    }
}

export function addPlaceToPlan(place: Place) {
    return {
        type: ADD_PLACE_TO_PLAN,
        place
    }
}

export function removePlaceFromPlan(place: Place) {
    return {
        type: REMOVE_PLACE_FROM_PLAN,
        place
    }
}