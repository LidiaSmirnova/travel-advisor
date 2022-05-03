import {ADD_PLACES} from "../types/actionTypes";
import {Place} from "../types/PlacesTypes";

export function addPlaces(places: Place[]) {
    return {
        type: ADD_PLACES,
        places
    }
}