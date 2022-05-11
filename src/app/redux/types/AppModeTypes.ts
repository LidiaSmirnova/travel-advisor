export enum ApiMode {
    STUB_API = "stub-api",
    REAL_API = "real-api",
}

export enum ViewMode {
    BUILDER,
    VIEW,
}

export enum BuilderMode {
    AUTO,
    MANUAL,
}

export interface AppModesState {
    viewMode: ViewMode
    builderMode: BuilderMode
}

export interface AppModeAction {
    type: string;
    viewMode: ViewMode;
}