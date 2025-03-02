export const createCustomElement = (tag, { id = '', classes = '', text = '', html = '', htmlFor = '', type = '', required = false, placeholder = '', dataset = {} } = {}) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (classes) element.className = classes;
  if (html) {
    element.innerHTML = html;
  } else if (text) {
    element.textContent = text;
  }

  if (tag === 'label') {
    element.setAttribute('for', htmlFor);
  }

  if (tag === 'input' || tag === 'textarea' || tag === 'button') {
    if (type) element.setAttribute('type', type);
    if (required) element.required = true;
    if (placeholder) element.placeholder = placeholder;
  }

  for (const key in dataset) {
    if (key === 'href' || key === 'target' || key === 'rel') {
      element.setAttribute(key, dataset[key]);
    } else {
      element.dataset[key] = dataset[key];
    }
  }

  return element;
};

export const createImageElement = (src, { classes = '', alt = '' } = {}) => {
  const image = createCustomElement('img', { classes });
  image.src = src;
  image.alt = alt;

  return image;
};
