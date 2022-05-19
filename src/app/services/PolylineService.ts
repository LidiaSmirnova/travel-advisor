/*global google*/
import store from "../../index";
import { Place } from "../types/PlaceType";
import { BuilderMode, ViewMode } from "../types/AppModeTypes";

let polyline: google.maps.Polyline;

export function initializePolyline(map: google.maps.Map): google.maps.Polyline {
  polyline = new google.maps.Polyline({
    strokeColor: "#2d4f30",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  polyline.setMap(map);

  store.subscribe(() => {
    const state = store.getState();

    if (state.appModes.viewMode == ViewMode.BUILDER) {
      const places =
        state.appModes.builderMode === BuilderMode.AUTO
          ? sortPlaces([...state.places.tripPlan])
          : state.places.tripPlan;

      buildRoute(places);
    }
  });
  return polyline;
}

export function buildRoute(tripPlan: Place[]) {
  const path = polyline.getPath();
  path.clear();

  tripPlan.forEach((place) => {
    const location = place.geometry.location;
    path.push(new google.maps.LatLng(location.lat, location.lng));
  });
}

function sortPlaces(places: Place[]) {
  return places.sort((first, second) => {
    let firstLocation = first.geometry.location;
    let secondLocation = second.geometry.location;

    return (
      firstLocation.lat - secondLocation.lat ||
      firstLocation.lng - secondLocation.lng
    );
  });
}
