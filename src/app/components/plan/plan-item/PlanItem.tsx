import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Place } from "../../../types/PlaceType";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { removePlaceFromPlan } from "../../../redux/slices/placesSlice";

import "./PlanItem.scss";

interface PlanItemProps {
  index: number;
  place: Place;
}

const PlanItem: React.FC<PlanItemProps> = ({ index, place }) => {
  const dispatch = useAppDispatch();

  const onRemoveItem = () => {
    dispatch(removePlaceFromPlan(place));
  };

  return (
    <ListItem className="plan-item">
      <ListItemText>
        {index}. {place.name}
      </ListItemText>
      <ListItemButton>
        <ListItemIcon>
          <ClearIcon onClick={onRemoveItem} />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default PlanItem;
