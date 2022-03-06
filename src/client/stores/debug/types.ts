import { Action } from "@rbxts/rodux";

export const TOGGLE_DISPLAY_KEYS_PRESSED = "debug/toggle_display_keys_pressed";
export const TOGGLE_DISPLAY_STATE = "debug/toggle_display_state";
export interface ActionToggleDisplayKeysPressed extends Action<typeof TOGGLE_DISPLAY_KEYS_PRESSED> {}
export interface ActionToggleDisplayState extends Action<typeof TOGGLE_DISPLAY_STATE> {}
export interface DebugState {
    display_keys_pressed: boolean;
    display_state: boolean;
}

export type DebugActions = ActionToggleDisplayKeysPressed | ActionToggleDisplayState;
