import { LocationObject } from "expo-location";
import { atom } from "jotai";
// import { create } from 'zustand';

/* ------- CURRENT LOCATION ------- */

export const CurrentLocation = atom<LocationObject | null>(null);

// Limpando a localização atual
// export const clearCurrentLocation = create((set) => () => set({ location: null }));
