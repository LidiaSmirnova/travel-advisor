/*global google*/
import {AppDispatch} from "../../index";
import {setActivePlace} from "../redux/actions/actions";
import {mapToPlace} from "../utils/PlaceMapper";
import {pushLocationToPath} from "./PolylineService";
import {showPlaceInfo} from "./InfoWindowService";

export function createMarker(place: google.maps.places.PlaceResult,
                             map: google.maps.Map,
                             dispatch: AppDispatch) {
    const marker = new google.maps.Marker({
        map,
        position: place?.geometry?.location
    });

    google.maps.event.addListener(marker, "mouseover", () => {
        showPlaceInfo(mapToPlace(place), marker, map);
    });

    google.maps.event.addListener(marker, "click", (event: google.maps.MapMouseEvent) => {
        dispatch(setActivePlace(mapToPlace(place)));
        pushLocationToPath(event);

        document?.getElementById(place.place_id || "")?.scrollIntoView({block: "center", behavior: "smooth"});
    });

    document?.getElementById(place.place_id || "")?.addEventListener("click", () => {
        const activePlace = mapToPlace(place);
        dispatch(setActivePlace(activePlace));
        showPlaceInfo(activePlace, marker, map);
    });
}