import {SET_VIEW_MODE, SWITCH_BUILDER_MODE} from "../types/actionTypes";
import {ViewMode} from "../types/AppModeTypes";

export function setViewMode(mode: ViewMode) {
    return {
        type: SET_VIEW_MODE,
        viewMode: mode
    }
}

export function switchBuilderMode() {
    return {
        type: SWITCH_BUILDER_MODE
    }
}