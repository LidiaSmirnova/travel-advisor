import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {FormControlLabel, Switch} from "@mui/material";

import Map from "../../components/map/Map";
import Header from "../../components/header/Header";
import Places from "../../components/place/places/Places";
import PageTitle from "../../components/page-title/PageTitle";
import PlanList from "../../components/plan/plan-list/PlanList";
import {AppDispatch} from "../../../index";

import {ViewMode} from "../../redux/types/AppModeTypes";
import {setViewMode, switchBuilderMode} from "../../redux/actions/appModeActions";

import "./BuildPlanPage.scss";

function BuildPlanPage() {
    const {country} = useParams();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setViewMode(ViewMode.BUILDER));
    });

    const onModeSwitched = () => {
        dispatch(switchBuilderMode());
    }

    return (
        <div className="plan-page">
            <div className="plan-page__builder">
                <Places width={25}/>
                <div className="plan-page__plan">
                    <div className="plan__title">
                        <div className="plan__title-text">Trip to {country}</div>
                        <FormControlLabel control={<Switch/>}
                                          label="Manual Mode"
                                          className="plan__mode-control"
                                          onClick={onModeSwitched}/>
                    </div>
                    <PlanList/>
                </div>
            </div>
            <Map/>
            <PageTitle title="BUILD a plan"/>
            <Header countryName={country}/>
        </div>
    )
}

export default BuildPlanPage;