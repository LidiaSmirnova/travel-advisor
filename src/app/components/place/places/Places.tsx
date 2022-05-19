import * as React from "react";

import PlaceCard from "../place-card/PlaceCard";
import { Place } from "../../../types/PlaceType";
import { useAppSelector } from "../../../redux/hooks/hooks";

import "./Places.scss";

interface PlacesProps {
  width: number;
}

const Places: React.FC<PlacesProps> = ({ width }) => {
  const { places } = useAppSelector((state) => state.places);
  const style = {
    width: `${width}%`,
  };

  return (
    <div className="places" style={style}>
      {places.map((place: Place) => {
        return <PlaceCard place={place} key={place.placeId} />;
      })}
    </div>
  );
};

export default Places;
