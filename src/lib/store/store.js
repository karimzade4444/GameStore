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
      editGame: {
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
      },

      setEditGame: (game) =>
        set({
          editGame: game,
        }),

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
          img: newImg,
        })),
      setPrice: (newPrice) =>
        set(() => ({
          price: newPrice,
        })),
      setLogo: (newLogo) =>
        set(() => ({
          logo: newLogo,
        })),
      setTrailer: (newTrailer) =>
        set(() => ({
          trailer: newTrailer,
        })),
      setImgbg: (newImgbg) =>
        set(() => ({
          imgbg: newImgbg,
        })),
      setDeveloper: (newDeveloper) =>
        set(() => ({
          developer: newDeveloper,
        })),
      setRelease: (newRelease) =>
        set(() => ({
          release: newRelease,
        })),
      setTags: (newTags) =>
        set(() => ({
          tags: newTags,
        })),
      setStorage: (newStorage) =>
        set(() => ({
          storage: newStorage,
        })),
      setLanguage: (newLanguage) =>
        set(() => ({
          language: newLanguage,
        })),
      setPlatform: (newPlatform) =>
        set(() => ({
          platform: newPlatform,
        })),
      setTitle: (newTitle) =>
        set(() => ({
          title: newTitle,
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
