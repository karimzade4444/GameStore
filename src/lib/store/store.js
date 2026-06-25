import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      games: [],
      cart: [],

      setGames: (games) => set({ games }),

      addToCart: (game) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === game.id);

          if (exists) return state;

          return {
            cart: [...state.cart, game],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "magmus-cart", 
    },
  ),
);
