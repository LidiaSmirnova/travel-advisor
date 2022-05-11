import * as React from "react";
import {useSelector} from "react-redux";
import {Place} from "../../../redux/types/PlacesTypes";
import {AppState} from "../../../redux/types/AppState";
import PlaceCard from "../place-card/PlaceCard";

import "./Places.scss";

interface PlacesProps {
    width: number
}

const Places: React.FC<PlacesProps> = ({width}) => {
    const {places} = useSelector((state: AppState) => state.places);
    const style = {
        width: `${width}%`,
    };

    return (
        <div className="places" style={style}>
            {
                places.map((place: Place) => {
                    return <PlaceCard place={place} key={place.placeId}/>
                })
            }
        </div>
    );
}

export default Places;