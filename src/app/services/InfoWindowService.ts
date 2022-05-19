/*global google*/
import { Place } from "../types/PlaceType";

let infoWindow: google.maps.InfoWindow;

export function initializeInfoWindow() {
  infoWindow = new google.maps.InfoWindow();
}

export function showPlaceInfo(
  place: Place,
  marker: google.maps.Marker,
  map: google.maps.Map
) {
  if (!infoWindow) return;

  infoWindow.setContent(infoWindowContentString(place));
  infoWindow.open(map, marker);
}

const infoWindowContentString = (place: Place): string =>
  `<div style="display: flex; flex-direction: column; justify-content: center">
        <div style="font-family: MenyakaBold, serif; color: #2d4f30">${place.name}</div>
        <div>${place.formattedAddress}</div>
    </div>`;
