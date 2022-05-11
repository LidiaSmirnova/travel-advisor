/*global google*/
import store, {AppDispatch} from "../../index";
import {showPlaceInfo} from "./InfoWindowService";
import {Place} from "../redux/types/PlacesTypes";
import {ViewMode} from "../redux/types/AppModeTypes";
import {addPlaceToPlan, setActivePlace} from "../redux/actions/placeActions";

let markers: google.maps.Marker[] = [];

export const initializeMarkers = (places: Place[],
                                  dispatch: AppDispatch,
                                  map: google.maps.Map) => {
    markers = places.map(place => createMarker(place, dispatch, map));
}

export const createMarker = (place: Place,
                             dispatch: AppDispatch,
                             map: google.maps.Map): google.maps.Marker => {
    const marker = new google.maps.Marker({
        map,
        position: place?.geometry?.location
    });

    google.maps.event.addListener(marker, "mouseover", () => {
        showPlaceInfo(place, marker, map);
    });

    google.maps.event.addListener(marker, "click", () => {
        if (store.getState().appModes.viewMode === ViewMode.BUILDER) {
            dispatch(addPlaceToPlan(place));
        }

        dispatch(setActivePlace(place));
        document?.getElementById(place.placeId || "")?.scrollIntoView({block: "center", behavior: "smooth"});
    });

    store.subscribe(() => {
        if (store.getState().places.activePlace?.placeId == place.placeId) {
            showPlaceInfo(place, marker, map);
        }
    });

    return marker;
}

export const toggleMarkers = (map: google.maps.Map) => {
    markers.forEach((marker) => marker.getMap() ? marker.setMap(null) : marker.setMap(map));
}