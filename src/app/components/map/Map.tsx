/*global google*/

import * as React from "react";
import {createCustomEqual} from "fast-equals";
import {useEffect, useRef, useState} from "react";
import {isLatLngLiteral} from "@googlemaps/typescript-guards";

import "./Map.scss";

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
                                    onClick,
                                    onIdle,
                                    children,
                                    style,
                                    ...options
                                }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }
        }
    }, [map, onClick, onIdle]);

    return (
        <>
            < div ref={ref} style={style} className="map" id="map"/>
            {
                React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        // set the map prop on the child component
                        return React.cloneElement(child, {map});
                    }
                })
            }
        </>)
        ;
}

const deepCompareEqualsForMaps = createCustomEqual(
    (deepEqual: (arg0: any, arg1: any) => any) => (a: any, b: any) => {
        if (
            isLatLngLiteral(a) ||
            a instanceof google.maps.LatLng ||
            isLatLngLiteral(b) ||
            b instanceof google.maps.LatLng
        ) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
        }

        return deepEqual(a, b);
    }
);

function useDeepCompareMemoize(value: any) {
    const ref = React.useRef();

    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}

function useDeepCompareEffectForMaps(callback: React.EffectCallback, dependencies: any[]) {
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default Map;

