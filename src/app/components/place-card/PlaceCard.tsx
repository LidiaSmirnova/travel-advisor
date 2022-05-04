import * as React from "react";
import {useSelector} from "react-redux";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {Place} from "../../redux/types/PlacesTypes";
import {AppState} from "../../redux/types/AppState";

import "./PlaceCard.scss"

interface AttractionCardProps {
    place: Place
}

const PlaceCard: React.FC<AttractionCardProps> = ({place}) => {
    const {activePlace} = useSelector((state: AppState) => state.places);

    const getClasses = () => {
        const isPlaceActive = activePlace?.placeId == place.placeId;
        return isPlaceActive ? "place place--active" : "place";
    }

    return (
        <Card className={getClasses()} id={place.placeId}>
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