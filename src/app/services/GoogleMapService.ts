/*global google*/
import {Place} from "../redux/types/PlacesTypes";
import {addPlaces} from "../redux/actions/actions";
import {mapToPlaces} from "../utils/PlaceMapper";
import {AppDispatch} from "../../index";
import {createMarker} from "./MarkerService";
import {initializePolyline} from "./PolylineService";

export function findThingsToDo(country: string | undefined, map: google.maps.Map) {
    const service = new google.maps.places.PlacesService(map);
    const request = {query: `Things to do ${country}`};
    let places: Place[];

    return (dispatch: AppDispatch) => {
        service.textSearch(
            request,
            (
                results: google.maps.places.PlaceResult[] | null,
                status: google.maps.places.PlacesServiceStatus
            ) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    places = mapToPlaces(results);
                    dispatch(addPlaces(places));

                    const center = places.at(0)?.geometry?.location;
                    if (center) {
                        map.setCenter(center);
                    }

                    const polyline = initializePolyline(map);
                    results.forEach(place => createMarker(place, map, polyline));
                }
            }
        );
    }
}