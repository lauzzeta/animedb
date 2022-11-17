import { post } from "./api-utils";

export const getPlayer = async (body) => post("/", body);

export const host = "https://rocketstats.onrender.com";
