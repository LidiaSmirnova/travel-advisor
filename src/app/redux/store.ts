import {configureStore} from "@reduxjs/toolkit";
import appModeReducer from "./slices/appModesSlice";
import placeReducer from "./slices/placesSlice";


export const store = configureStore({
    reducer: {
        places: placeReducer,
        appModes: appModeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
