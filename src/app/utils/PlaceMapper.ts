/*global google*/
import {Place} from "../types/PlaceType";
import {StubPlaceResult} from "../services/StubPlaceResult";

export function mapToPlaces(results: google.maps.places.PlaceResult[]): Place[] {
    return results.map((result) => {
        let place = mapToPlace(result);
        enrichWithPhotoUrl(place, result);
        return place;
    });
}

export function mapToStubPlaces(results: StubPlaceResult[]): Place[] {
    return results.map((result) => {
        let place = mapToPlace(result);
        enrichWithStubPhotoUrl(place, result);
        return place;
    });
}


function mapToPlace(place: google.maps.places.PlaceResult | StubPlaceResult): Place {
    return <Place>{
        formattedAddress: place.formatted_address || "",
        geometry: {
            location: {
                lat: place.geometry?.location.lat,
                lng: place.geometry?.location.lng
            }
        },
        name: place.name || "",
        placeId: place.place_id || "",
        rating: place.rating || 0,
        userRatingsTotal: place.user_ratings_total || 0
    }
}

function enrichWithPhotoUrl(place: Place, placeResult: google.maps.places.PlaceResult) {
    place.photoUrl = placeResult.photos?.at(0)?.getUrl({}) || "";
}

function enrichWithStubPhotoUrl(place: Place, placeResult: StubPlaceResult) {
    place.photoUrl = placeResult.photos?.at(0)?.raw_reference.fife_url || "";
}