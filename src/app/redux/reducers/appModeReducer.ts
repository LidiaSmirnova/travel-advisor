import {AppModeAction, AppModesState, BuilderMode, ViewMode} from "../types/AppModeTypes";
import {SET_VIEW_MODE, SWITCH_BUILDER_MODE} from "../types/actionTypes";

const initialState: AppModesState = {
    viewMode: ViewMode.VIEW,
    builderMode: BuilderMode.AUTO
};

function appModeReducer(
    state: AppModesState = initialState,
    action: AppModeAction
): AppModesState {
    switch (action.type) {
        case SET_VIEW_MODE:
            return {
                ...state,
                viewMode: action.viewMode
            };
        case SWITCH_BUILDER_MODE:
            return {
                ...state,
                builderMode: state.builderMode === BuilderMode.AUTO
                    ? BuilderMode.MANUAL
                    : BuilderMode.AUTO
            };
        default:
            return state;
    }
}

export default appModeReducer;