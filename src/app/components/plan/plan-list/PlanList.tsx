import * as React from "react";
import {List} from "@mui/material";

import PlanItem from "../plan-item/PlanItem";
import {Place} from "../../../types/PlaceType";
import {useAppSelector} from "../../../redux/hooks/hooks";

function PlanList(){
    const {tripPlan} = useAppSelector(state => state.places);

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