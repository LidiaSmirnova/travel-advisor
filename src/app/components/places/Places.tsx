import * as React from "react";
import {useSelector} from "react-redux";
import {Place} from "../../redux/types/PlacesTypes";
import {AppState} from "../../redux/types/AppState";
import PlaceCard from "../place-card/PlaceCard";

import "./Places.scss";

function Places() {
    const places = useSelector((state: AppState) => state.places.places);

    return (
        <div className="places">
            {
                places.map((place: Place, id: number) => {
                    return <PlaceCard place={place} key={id}/>
                })
            }
        </div>
    );
}

export default Places;