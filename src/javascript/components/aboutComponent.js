import { deleteCarousel } from "../utils/carousel/carouselManager"
import { clearMainContent } from "../utils/domUtils/mainContentUtils";
import { createCustomElement, createImageElement } from "../utils/domUtils/elementUtils";
import aboutImage from '../../assets/images/about-image.jpg'
import welcomeImage from '../../assets/images/welcome-image.jpg'

const para1 = `At Cup and Crust, we believe every cup of coffee, bite of pastry, and scoop of ice cream tells a unique story. Our mission is to offer a warm, inviting space where friends and family can enjoy life’s simple pleasures. From the first sip of freshly brewed coffee to the comfort of a warm pastry or the joy of a creamy scoop of ice cream, we aim to make every visit memorable.`

const para2 = `Our passion for handcrafted delights shines through in everything we serve. With carefully selected ingredients and a commitment to quality, we create a welcoming environment where you can relax, connect, and savor life’s little joys, one delicious treat at a time.`

const ABOUT_ITEMS = ['welcome', 'passion', 'commitment', 'community']

export const initializeAboutPage = () => {
    deleteCarousel();
    clearMainContent();
    setupAboutImage()
    setupWelcome()
}

const setupAboutImage = () => {
    const contentElement = document.getElementById('main-content');
    const aboutPageContainer = createCustomElement('section', {
        classes: 'about-page-container'
    })

    const imageContainer = createCustomElement('section', {
        classes: 'about-page-image-container'
    })

    const image = createImageElement(aboutImage, {
        classes: 'about-image'
    })

    imageContainer.appendChild(image)
    aboutPageContainer.appendChild(imageContainer)
    contentElement.appendChild(aboutPageContainer)
}

const setupWelcome = () => {
    const contentElement = document.getElementById('main-content');

    const welcomeContainer = createCustomElement('section', {
        classes: 'welcome-container'
    })

    const welcomeText = createCustomElement('p', {
        classes: 'welcome-text',
    })

    const welcomeTitle = createCustomElement('h6', {
        classes: 'welcome-title',
        text: 'Welcome to Cup and Crust'
    })

    const paragraphOne = createCustomElement('p', {
        text: para1
    })

    const paragraphTwo = createCustomElement('p', {
        text: para2
    })

    const welcomeDescription = createCustomElement('p', {
        classes: 'welcome-description',
    })

    const welcomeImg = createImageElement(welcomeImage, {
        classes: 'welcome-image'
    })

    welcomeDescription.append(paragraphOne, paragraphTwo)
    welcomeText.append(welcomeTitle, welcomeDescription)
    welcomeContainer.append(welcomeText, welcomeImg)
    contentElement.appendChild(welcomeContainer)
}