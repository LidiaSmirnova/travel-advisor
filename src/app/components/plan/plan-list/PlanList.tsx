import * as React from "react";
import {useSelector} from "react-redux";
import {List} from "@mui/material";

import {Place} from "../../../redux/types/PlacesTypes";
import {AppState} from "../../../redux/types/AppState";
import PlanItem from "../plan-item/PlanItem";

function PlanList(){
    const {tripPlan} = useSelector((state: AppState) => state.places);

    return (
        <List className="plan-list">
            {
                tripPlan.map((place: Place, id) => {
                    return <PlanItem index={id} place={place} key={id}/>
                })
            }
        </List>
    );
}

export default PlanList;