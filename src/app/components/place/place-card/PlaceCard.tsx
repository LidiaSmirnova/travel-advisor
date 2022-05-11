import * as React from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import {Place} from "../../../types/PlaceType";
import {ViewMode} from "../../../types/AppModeTypes";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {addPlaceToPlan, setActivePlace} from "../../../redux/slices/placesSlice";

import "./PlaceCard.scss"

interface PlaceCardProps {
    place: Place
}

const PlaceCard: React.FC<PlaceCardProps> = ({place}) => {
    const {activePlace} = useAppSelector(state => state.places);
    const {viewMode} = useAppSelector(state => state.appModes);
    const dispatch = useAppDispatch();

    const getClasses = () => {
        const isPlaceActive = activePlace?.placeId == place.placeId;
        return isPlaceActive ? "place place--active" : "place";
    }

    const onClick = () => {
        dispatch(setActivePlace(place));

        if (viewMode === ViewMode.BUILDER) {
            dispatch(addPlaceToPlan(place));
        }
    }

    return (
        <Card className={getClasses()} id={place.placeId} onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={place.photoUrl}
                    alt="place img"
                />
                <CardContent>
                    <div className="place__name">{place.name}</div>
                    <div className="place__metrics">
                        <div className="place__rating">
                            <div>{place.rating}</div>
                            <StarIcon/>
                        </div>
                        <div className="place__review-number">({place.userRatingsTotal})</div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PlaceCard;