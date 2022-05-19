import { BuilderMode, ViewMode } from "../../types/AppModeTypes";
import { createSlice } from "@reduxjs/toolkit";

interface AppModeState {
  viewMode: ViewMode;
  builderMode: BuilderMode;
}

const initialState: AppModeState = {
  viewMode: ViewMode.VIEW,
  builderMode: BuilderMode.AUTO,
};

export const appModesSlice = createSlice({
  name: "appModes",
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    switchBuilderMode: (state) => {
      state.builderMode = state.builderMode === BuilderMode.AUTO
          ? BuilderMode.MANUAL
          : BuilderMode.AUTO;
    },
  },
});

export const { setViewMode, switchBuilderMode } = appModesSlice.actions;
export default appModesSlice.reducer;
