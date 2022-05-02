import {ADD_ATTRACTIONS} from "../types/actionTypes";
import {Attraction} from "../types/AttractionsTypes";

export function addAttractions(attractions: Attraction[]) {
    console.log(attractions)
    return {
        type: ADD_ATTRACTIONS,
        attractions
    }
}