import {Geometry} from "../types/PlaceType";

interface RawReference {
    fife_url: string;
}
interface StubPhotoResult {
    height: number,
    width: number,
    html_attributions: string[],
    photo_reference: string,
    raw_reference: RawReference;
}

export interface StubPlaceResult {
    business_status: string,
    formatted_address: string,
    geometry: Geometry,
    icon: string,
    icon_background_color: string,
    icon_mask_base_uri: string,
    name: string,
    photos: StubPhotoResult[],
    place_id: string,
    rating: number,
    reference: string,
    types: string[],
    user_ratings_total: number
}