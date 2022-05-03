/*global google*/
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {findThingsToDo} from "../../services/GoogleMapService";
import {AppDispatch} from "../../../index";
import {retroMapStyle} from "./MapStyles";

import "./Map.scss";

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
                zoom: 8,
            });

        // @ts-ignore
        map.setOptions({styles: retroMapStyle});
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
        <div id="map" className="map"/>
    );
}