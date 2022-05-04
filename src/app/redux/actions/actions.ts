import {ADD_PLACES, SET_ACTIVE_PLACE} from "../types/actionTypes";
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
        activePlace: place
    }
}