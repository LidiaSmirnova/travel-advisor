/*global google*/
import { mapToPlaces, mapToStubPlaces } from "../utils/PlaceMapper";
import { environment } from "../../env/environment";
import { initializeInfoWindow } from "./InfoWindowService";
import { initializePolyline } from "./PolylineService";
import { initializeMarkers } from "./MarkerService";

import { ApiMode } from "../types/AppModeTypes";
import { Place } from "../types/PlaceType";
import { addPlaces } from "../redux/slices/placesSlice";
import { AppDispatch } from "../redux/store";

const { apiMode, apiUrl } = environment;

export function findThingsToDo(
  country: string | undefined,
  map: google.maps.Map
) {
  return (dispatch: AppDispatch) => {
    if (apiMode == ApiMode.REAL_API) {
      makeRealCall(country, dispatch, map);
    } else {
      makeFakeCall(dispatch, map);
    }
  };
}

const makeRealCall = (
  country: string | undefined,
  dispatch: AppDispatch,
  map: google.maps.Map
) => {
  const service = new google.maps.places.PlacesService(map);
  const request = { query: `Things to do ${country}` };

  return service.textSearch(
    request,
    (
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        initializeMap(mapToPlaces(results), dispatch, map);
      }
    }
  );
};

const makeFakeCall = (dispatch: AppDispatch, map: google.maps.Map) => {
  fetch(`${apiUrl}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) =>
      initializeMap(mapToStubPlaces(json.results), dispatch, map)
    );
};

const initializeMap = (
  places: Place[],
  dispatch: AppDispatch,
  map: google.maps.Map
) => {
  dispatch(addPlaces(places));

  const center = places.at(0)?.geometry?.location;
  if (center) {
    map.setCenter(center);
  }

  initializeMarkers(places, dispatch, map);
  initializePolyline(map);
  initializeInfoWindow();
};
