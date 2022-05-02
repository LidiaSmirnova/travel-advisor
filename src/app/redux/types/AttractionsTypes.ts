export interface Location {
    lat: number;
    lng: number;
}

export interface Geometry {
    location: Location;
}

export interface Photo {
    photo_reference: string;
}

export interface Attraction {
    formatted_address: string;
    geometry: Geometry;
    name: string;
    photos: Photo[],
    place_id: string;
    rating: number;
    user_ratings_total: number;
}

export interface AttractionsState {
    attractions: Attraction[];
}

export interface AttractionAction {
    type: string;
    attractions: Attraction[];
}