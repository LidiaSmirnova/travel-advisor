/*global google*/
let polyline: google.maps.Polyline;

export function initializePolyline(map: google.maps.Map): google.maps.Polyline {
    polyline = new google.maps.Polyline({
        strokeColor: "#2d4f30",
        strokeOpacity: 1.0,
        strokeWeight: 3,
    });

    polyline.setMap(map);
    return polyline;
}

export function removeLine(): void {
    const path = polyline?.getPath();
    path.clear();
}