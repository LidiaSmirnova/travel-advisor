import * as React from "react";
import {useParams} from "react-router-dom";

import Header from "../../components/header/Header";
import Places from "../../components/places/Places";
import Map from "../../components/map/Map";

import "./CountryPage.scss";

export default function CountryPage() {
    const {country} = useParams();

    return (
        <div className="country-page">
            <Places/>
            <div className="country-page__title-wrapper">
                <div className="country-page__title">THINGS to DO</div>
            </div>
            <Map/>
            <Header countryName={country}/>
        </div>
    )
}