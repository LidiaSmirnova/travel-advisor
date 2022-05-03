/*global google*/
import {Place} from "../redux/types/PlacesTypes";

export function mapToPlaces(places: google.maps.places.PlaceResult[]): Place[] {
    return places.map(place => mapToPlace(place));
}

function mapToPlace(place: google.maps.places.PlaceResult): Place {
    return {
        formattedAddress: place.formatted_address || "",
        geometry: {
            location: {
                lat: place.geometry?.location.lat() || 0,
                lng: place.geometry?.location.lng() || 0
            }
        },
        name: place.name || "",
        photoUrl: place.photos?.at(0)?.getUrl({}) || "",
        placeId: place.place_id || "",
        rating: place.rating || 0,
        userRatingsTotal: place.user_ratings_total || 0
    }
}