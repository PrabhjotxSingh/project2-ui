import { writable } from "svelte/store";

export const currentTimer = writable("00:00");
export const startClicked = writable(false);
export const stopClicked = writable(false);
export const resetClicked = writable(false);
export const toasterStatus = writable(false);
