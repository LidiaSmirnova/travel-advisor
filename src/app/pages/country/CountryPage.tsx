import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import Map from "../../components/map/Map";
import Header from "../../components/header/Header";
import Places from "../../components/place/places/Places";
import PageTitle from "../../components/page-title/PageTitle";

import {AppDispatch} from "../../../index";
import {ViewMode} from "../../redux/types/AppModeTypes";
import {setViewMode} from "../../redux/actions/appModeActions";

import "./CountryPage.scss";

function CountryPage() {
    const {country} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(setViewMode(ViewMode.VIEW));
    });

    const onBuildPlanClick = () => {
        navigate(`/things-to-do/${country}/plan`);
    }

    return (
        <div className="country-page">
            <div className="country-page__wrapper">
                <Places width={60}/>
            </div>
            <Map/>
            <PageTitle title="THINGS to DO"/>
            <Header countryName={country}/>
            <div className="country-page__footer-wrapper">
                <div className="country-page__footer-btn" onClick={onBuildPlanClick}>Build a plan</div>
            </div>
        </div>
    )
}

export default CountryPage;