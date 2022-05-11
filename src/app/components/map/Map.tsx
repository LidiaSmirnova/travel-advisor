/*global google*/
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {findThingsToDo} from "../../services/GoogleMapService";
import {AppDispatch} from "../../../index";
import {retroMapStyle} from "./MapStyles";
import MarkersControl from "./MarkersControl";
import {APP_KEY} from "../../../env/app-key";

import "./Map.scss";


let map: google.maps.Map;

function Map() {
    const {country} = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const onScriptLoad = () => {
        initializeMap();
        dispatch(findThingsToDo(country, map));
    }

    const addMapControl = () => {
        const markersControlDiv = document.createElement("div");
        MarkersControl(markersControlDiv, map);

        map.controls[google.maps.ControlPosition.TOP_CENTER].push(markersControlDiv);
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
        addMapControl();
    }

    const loadPlacesLibrary = () => {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=${APP_KEY}&libraries=places&language=en`;

        const x: HTMLElement = document.getElementsByTagName('script')[0];
        x.parentNode?.insertBefore(s, x);
        s.addEventListener('load', () => onScriptLoad());
    }

    useEffect(() => !window.google ? loadPlacesLibrary() : onScriptLoad(), [window.google]);

    return <div id="map"/>;
}

export default Map;