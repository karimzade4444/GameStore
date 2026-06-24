import { create } from "zustand";

export const useStore = create((set) => ({
  games: [],
  setGames: (games) => set({ games }),
}));