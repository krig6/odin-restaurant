export const getValidData = (data, ...keys) => {
  return data.filter((item) => keys.every((key) => item[key]));
};
