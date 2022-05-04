/*global google*/
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {findThingsToDo} from "../../services/GoogleMapService";
import {AppDispatch} from "../../../index";
import {retroMapStyle} from "./MapStyles";

import "./Map.scss";
import {Button, ButtonGroup} from "@mui/material";
import {removeLine} from "../../services/PolylineService";

let map: google.maps.Map;

export default function Map() {
    const {country} = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const onScriptLoad = () => {
        initializeMap();
        dispatch(findThingsToDo(country, map));
    }

    const initializeMap = () => {
        map = new window.google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
                zoom: 7,
                mapTypeControl: false,
                streetViewControl: false
            });

        // @ts-ignore
        map.setOptions({styles: retroMapStyle});
        document.getElementById("remove-line")!.addEventListener("click", removeLine);
    }

    const loadPlacesLibrary = () => {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDNEAYHc5IFLOzJvo91RIoazgm0f_Ig2_c&libraries=places&language=en`;

        const x: HTMLElement = document.getElementsByTagName('script')[0];
        x.parentNode?.insertBefore(s, x);
        s.addEventListener('load', () => onScriptLoad());
    }

    useEffect(() => !window.google ? loadPlacesLibrary() : onScriptLoad(), [window.google]);

    return (
        <div>
            <div id="map"/>
            <ButtonGroup id="panel" variant="contained" aria-label="outlined primary button group">
                <Button id="remove-line">Remove line</Button>
            </ButtonGroup>
        </div>
    );
}