export const createCustomElement = (tag, { id = '', classes = '', text = '', html = '', dataset = {} } = {}) => {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (classes) element.className = classes;
    if (html) {
        element.innerHTML = html;
    } else if (text) {
        element.textContent = text;
    }

    for (const key in dataset) {
        element.dataset[key] = dataset[key];
    }

    return element;
}

export const createImageElement = (src, { className = '', alt = '' } = {}) => {
    const image = createCustomElement('img', { classes: className });
    image.src = src;
    image.alt = alt;

    return image;
}
