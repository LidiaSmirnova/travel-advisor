export interface Location {
    lat: number;
    lng: number;
}

export interface Geometry {
    location: Location;
}

export interface Place {
    formattedAddress: string;
    geometry: Geometry;
    name: string;
    photoUrl: string,
    placeId: string;
    rating: number;
    userRatingsTotal: number;
}

export interface PlacesState {
    places: Place[];
    activePlace: Place | null;
}

export interface PlaceAction {
    type: string;
    places: Place[];
    activePlace: Place;
}