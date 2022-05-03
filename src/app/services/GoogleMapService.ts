/*global google*/
import {Location, Place} from "../redux/types/PlacesTypes";
import {addPlaces} from "../redux/actions/actions";
import {mapToPlaces} from "../utils/PlaceMapper";
import {AppDispatch} from "../../index";

export const getLocation = (country: string): Location => {
    let lat, lng;

    new window.google.maps.Geocoder().geocode(
        {address: `${country}`},
        function (results, status) {
            if (status === window.google.maps.GeocoderStatus.OK) {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
            } else {
                alert(
                    "Geocode was not successful for the following reason: " + status
                );
            }
        }
    );

    return {
        lat: lat || 0,
        lng: lng || 0
    }
}

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

                    const placeLocation: Location = places[0].geometry.location;
                    map.setCenter(new google.maps.LatLng(placeLocation.lat, placeLocation.lng));
                    results.forEach(place => createMarker(place, map));
                }
            }
        );
    }
}

function createMarker(place: google.maps.places.PlaceResult, map: google.maps.Map) {
    const infowindow = new google.maps.InfoWindow();
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
        console.log("click: " + place.name);
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });
}