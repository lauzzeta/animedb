import { get } from "./api-utils";

export const getPlayer = async (id) =>
  get(`https://api.jikan.moe/v4/anime?q=${id}&sfw`);
