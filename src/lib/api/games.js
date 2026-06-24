import axios from "axios";

const api = "https://69e5ff70ce4e908a155ec5a1.mockapi.io/users";

export const getGames = async () => {
  const res = await axios.get(api);
  return res.data;
};

export const deleteGames = async (id) => {
  return await axios.delete(`${api}/${id}`);
};

export const createGames = async (user) => {
  return await axios.post(api, user);
};
