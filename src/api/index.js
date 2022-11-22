import { get } from "./api-utils";

export const getResults = async (id) =>
  get(`https://api.jikan.moe/v4/anime?q=${id}&sfw`);

export const getFullAnime = async (id) =>
  get(`https://api.jikan.moe/v4/anime/${id}/full`);

export const getCharacters = async (id) =>
  get(`https://api.jikan.moe/v4/anime/${id}/characters`);

export const getStaff = async (id) =>
  get(`https://api.jikan.moe/v4/anime/${id}/staff`);
