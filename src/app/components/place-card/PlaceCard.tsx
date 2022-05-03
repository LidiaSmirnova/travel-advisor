import * as React from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {Place} from "../../redux/types/PlacesTypes";

import "./PlaceCard.scss"

interface AttractionCardProps {
    place: Place
}

const PlaceCard: React.FC<AttractionCardProps> = ({place}) => {
    return (
        <Card className="place">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={place.photoUrl}
                    alt="green iguana"
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