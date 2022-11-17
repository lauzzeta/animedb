const API_URL = "https://rocketstats.herokuapp.com";

export const post = async (route = "", body = {}) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", localStorage.getItem("access_token"));

    const raw = JSON.stringify(body);
    const requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };

    const res = await fetch(`${API_URL}${route}`, requestOptions);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const get = async (route = "") => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", localStorage.getItem("access_token"));

    const requestOptions = {
      method: "GET",
      headers,
    };

    const res = await fetch(`${API_URL}${route}`, requestOptions);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
