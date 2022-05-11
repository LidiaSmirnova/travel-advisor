import * as React from "react";
import {useDispatch} from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Place} from "../../../redux/types/PlacesTypes";
import {removePlaceFromPlan} from "../../../redux/actions/placeActions";
import {AppDispatch} from "../../../../index";

import "./PlanItem.scss";

interface PlanItemProps {
    index: number
    place: Place
}

const PlanItem: React.FC<PlanItemProps> = ({index, place}) => {
    const dispatch = useDispatch<AppDispatch>();

    const onRemoveItem = () => {
        dispatch(removePlaceFromPlan(place));
    };

    return (
        <ListItem className="plan-item">
            <ListItemText>{index}. {place.name}</ListItemText>
            <ListItemButton>
                <ListItemIcon>
                    <ClearIcon onClick={onRemoveItem}/>
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
}

export default PlanItem;