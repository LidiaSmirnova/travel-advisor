import * as React from "react";
import {useParams} from "react-router-dom";

import Header from "../../components/header/Header";
import MapWrapper from "../../components/map/MapWrapper";
import Attractions from "../../components/attractions/Attractions";

import "./CountryPage.scss";

export default function CountryPage() {
    const {country} = useParams();

    return (
        <div className="country-page">
            <Header countryName={country}/>
            <MapWrapper/>
            <div className="country-page__title">THINGS to DO</div>
            <Attractions/>
        </div>
    )
}