import { createCustomElement, createImageElement } from "../domUtils/elementUtils";
import aboutSections from '../../data/aboutPageContent.json'
import aboutMainImage from '../../../assets/images/about-page-images/about-image.jpg'
import { fetchAllImages } from "../imageUtils/imageUtils";
const fetchSegmentImages = fetchAllImages(require.context('../../../assets/images/about-page-images/', false, /\.(png|jpe?g|gif|svg)$/))

export const setupAboutMainImage = () => {
    const contentElement = document.getElementById('main-content');

    if (!contentElement) {
        console.log(`Element with id 'main-content' not found.`)
        return;
    }

    const introBanner = createCustomElement('div', {
        classes: 'intro-banner'
    })

    const introText = createCustomElement('p', {
        classes: 'intro-text',
        text: 'Brewing More Than Coffee, Creating Connections'
    })

    const aboutMainContainer = createCustomElement('section', {
        classes: 'about-main-container'
    })

    const imageWrapper = createCustomElement('section', {
        classes: 'about-image-wrapper'
    })

    const image = createImageElement(aboutMainImage, {
        classes: 'about-main-image'
    })

    imageWrapper.appendChild(image)
    aboutMainContainer.appendChild(imageWrapper)
    introBanner.appendChild(introText)
    contentElement.append(introBanner, aboutMainContainer)
}

export const populateAboutPageSections = () => {
    const contentElement = document.getElementById('main-content');

    if (!contentElement) {
        console.log(`Element with id 'main-content' not found.`)
        return;
    }

    const aboutSectionWrapper = createCustomElement('section', {
        classes: 'about-section-wrapper'
    })

    aboutSections.forEach(section => {
        const { id, heading, image, content } = section

        const aboutSection = createCustomElement('div', {
            classes: `${id}-container about-section`
        })

        const aboutSectionText = createCustomElement('section', {
            classes: `${id}-text about-section-text`,
        })

        const aboutSectionTitle = createCustomElement('h6', {
            classes: 'about-section-title',
            text: heading
        })

        const aboutSectionContent = createCustomElement('div', {
            classes: `${id}-content about-section-content`
        })

        const aboutSectionImage = createImageElement(fetchSegmentImages[image], {
            classes: `${id}-image about-section-image`
        })

        if (content && content.length > 0) {
            content.forEach(para => {
                Object.keys(para).forEach(paragraphKey => {
                    const paragraphElement = createCustomElement('p', {
                        text: para[paragraphKey]
                    })
                    aboutSectionContent.appendChild(paragraphElement)
                })
            })
        }

        aboutSectionText.append(aboutSectionTitle, aboutSectionContent);
        aboutSection.append(aboutSectionText, aboutSectionImage);
        aboutSectionWrapper.appendChild(aboutSection)
        contentElement.appendChild(aboutSectionWrapper)
    })
}
