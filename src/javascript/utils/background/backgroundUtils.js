export const applyTheme = (className) => {
  document.body.classList.add(className);
};

export const removeTheme = (className) => {
  document.body.classList.remove(className);
};
