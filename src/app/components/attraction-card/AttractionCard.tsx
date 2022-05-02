import * as React from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import georgia from "../../static/images/georgia.jpeg";
import StarIcon from '@mui/icons-material/Star';

import "./AttractionCard.scss"
import {Attraction} from "../../redux/types/AttractionsTypes";

interface AttractionCardProps {
    attraction?: Attraction
}

const AttractionCard: React.FC<AttractionCardProps> = ({attraction}) => {
    return (
        <Card key={attraction?.user_ratings_total} className="attraction">
            <CardActionArea>
                <CardMedia
                    component="img"
                    min-height="180"
                    image={georgia}
                    alt="green iguana"
                />
                <CardContent>
                    <div className="attraction__name">{attraction?.name}</div>
                    <div className="attraction__metrics">
                        <div className="attraction__rating">
                            <div>{attraction?.rating}</div>
                            <StarIcon/>
                        </div>
                        <div className="attraction__review-number">({attraction?.user_ratings_total})</div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default AttractionCard;