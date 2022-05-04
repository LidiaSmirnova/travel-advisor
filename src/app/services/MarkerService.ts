/*global google*/
export function createMarker(place: google.maps.places.PlaceResult,
                             map: google.maps.Map,
                             polyline: google.maps.Polyline) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, "click", (e) => {
        const path = polyline.getPath();
        const location = place.geometry?.location;
        if (location) {
            path.push(e.latLng);
        }
    });
}