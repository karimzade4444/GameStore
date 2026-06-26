import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      games: [],
      cart: [],
      name: "",
      img: "",
      price: "",
      logo: "",
      trailer: "",
      imgbg: "",
      developer: "",
      release: "",
      tags: "",
      storage: "",
      language: "",
      platform: "",
      title: "",

      setGames: (games) => set({ games }),

      addToCart: (game) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === game.id);

          if (exists) return state;

          return {
            cart: [...state.cart, game],
          };
        }),
      setName: (newName) =>
        set(() => ({
          name: newName,
        })),
      setImg: (newImg) =>
        set(() => ({
          name: newImg,
        })),
      setPrice: (newPrice) =>
        set(() => ({
          name: newPrice,
        })),
      setLogo: (newLogo) =>
        set(() => ({
          name: newLogo,
        })),
      setTrailer: (newTrailer) =>
        set(() => ({
          name: newTrailer,
        })),
      setImgbg: (newImgbg) =>
        set(() => ({
          name: newImgbg,
        })),
      setDeveloper: (newDeveloper) =>
        set(() => ({
          name: newDeveloper,
        })),
      setRelease: (newRelease) =>
        set(() => ({
          name: newRelease,
        })),
      setTags: (newTags) =>
        set(() => ({
          name: newTags,
        })),
      setStorage: (newStorage) =>
        set(() => ({
          name: newStorage,
        })),
      setLanguage: (newLanguage) =>
        set(() => ({
          name: newLanguage,
        })),
      setPlatform: (newPlatform) =>
        set(() => ({
          name: newPlatform,
        })),
      setTitle: (newTitle) =>
        set(() => ({
          name: newTitle,
        })),

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
