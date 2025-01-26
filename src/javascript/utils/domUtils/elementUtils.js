export const createCustomElement = (tag, { id = '', classes = '', text = '', html = '', htmlFor = '', dataset = {} } = {}) => {
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
    for (const key in dataset) {
        element.dataset[key] = dataset[key];
    }

    return element;
}

export const createImageElement = (src, { classes = '', alt = '' } = {}) => {
    const image = createCustomElement('img', { classes });
    image.src = src;
    image.alt = alt;

    return image;
}
