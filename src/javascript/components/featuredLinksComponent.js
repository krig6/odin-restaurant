import '../../styles/featuredLinksComponent.css';
import { createCustomElement, createImageElement } from '../utils/elementUtils';
import { fetchAllImages, loadImagesIntoCache } from '../utils/imageUtils'

const featuredImages = fetchAllImages(require.context('../../assets/images/featured-links-images', false, /\.(png|jpe?g|gif|svg)$/));

const featuredImagesURL = Object.values(featuredImages);

loadImagesIntoCache(featuredImagesURL);

const FEATURED_LINKS = [
    {
        imageSrc: featuredImages['contact-us-image.png'],
        heading: 'MESSAGE US',
        description: `Questions or feedback? We'd love to hear from you! Reach out to share your thoughts or say hello.`,
        altText: 'Envelope',
        targetPage: 'email'
    },
    {
        imageSrc: featuredImages['menu-image.png'],
        heading: 'DELIGHTS',
        description: `Explore our selection of freshly brewed coffees, delicious pastries, and savory snacks. Whether you're here for a quick pick-me-up or a leisurely break, we have something to delight every palate.`,
        altText: 'Coffee',
        targetPage: 'menu'
    },
    {
        imageSrc: featuredImages['about-us-image.png'],
        heading: 'OUR STORY',
        description: `Welcome to our cozy coffee corner. With a passion for quality brews and community, we invite you to discover the heart behind every cup.`,
        altText: 'Book',
        targetPage: 'about'
    },
];

export const initializeFeaturedLinks = () => {
    const contentElement = document.getElementById('main-content');

    if (!contentElement) {
        console.error(`Element with id 'main-content' not found`);
        return;
    }

    const featuredLinksSection = createCustomElement('section', { classes: 'featured-links-container' });

    const fragment = document.createDocumentFragment();
    FEATURED_LINKS.forEach(link => fragment.appendChild(createFeaturedLinkCard(link)));
    featuredLinksSection.appendChild(fragment);

    contentElement.appendChild(featuredLinksSection);

}

const createFeaturedLinkCard = ({ imageSrc, heading, description, altText, targetPage }) => {
    const card = createCustomElement('figure', { classes: 'featured-link-card' });
    card.dataset.action = targetPage;

    const image = createImageElement(imageSrc, { className: 'featured-link-image', alt: altText });

    const title = createCustomElement('figcaption', { classes: 'featured-link-title', text: heading });

    const descriptionParagraph = createCustomElement('p', { classes: 'featured-link-description', text: description });

    card.append(image, title, descriptionParagraph);

    return card;
}
