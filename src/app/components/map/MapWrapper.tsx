import * as React from "react";
import {Wrapper} from "@googlemaps/react-wrapper";
import Map from "./Map";

export default function MapWrapper() {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

    return (
        <Wrapper apiKey="API_KEY">
            <Map center={center} zoom={zoom} style={{width: "40%"}}/>
        </Wrapper>
    )
}