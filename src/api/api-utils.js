export const get = async (route) => {
  try {
    const res = await fetch(route);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
