import { writable } from "svelte/store";

export const currentTimer = writable("00:00");
export const selectedBread = writable("n/a");
export const toastTime = writable(0);
export const startClicked = writable(false);
export const stopClicked = writable(false);
export const resetClicked = writable(false);
export const toasterStatus = writable(false);

// Favorites list
export const favorites = writable([
  { title: "Neha Bread 1", breadType: "Whole Wheat", time: 2 },
  { title: "Neha Bread 2", breadType: "White Bread", time: 3 },
  { title: "Morning Bagel", breadType: "Bagel", time: 4 },
  { title: "Evening Toast", breadType: "English Muffin", time: 1 },
  { title: "Crunchy Delight", breadType: "Croissant", time: 5 },
]);
