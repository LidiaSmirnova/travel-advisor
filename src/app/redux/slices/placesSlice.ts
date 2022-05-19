import { Place } from "../../types/PlaceType";
import { createSlice } from "@reduxjs/toolkit";

interface PlacesState {
  places: Place[];
  activePlace: Place | null;
  tripPlan: Place[];
}

const initialState: PlacesState = {
  places: [],
  tripPlan: [],
  activePlace: null,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlaces: (state, action) => {
      state.places = [...state.places, ...action.payload];
    },
    setActivePlace: (state, action) => {
      state.activePlace = action.payload;
    },
    addPlaceToPlan: (state, action) => {
      state.tripPlan = Array.from(new Set([...state.tripPlan, action.payload]));
    },
    removePlaceFromPlan: (state, action) => {
      state.tripPlan = [
        ...state.tripPlan.filter(
          (place) => place.placeId !== action.payload.placeId
        ),
      ];
    },
  },
});

export const {
  addPlaces,
  setActivePlace,
  addPlaceToPlan,
  removePlaceFromPlan,
} = placesSlice.actions;

export default placesSlice.reducer;
