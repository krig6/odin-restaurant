import '../../styles/menuComponent.css'
import { initializeItems } from '../utils/menu/menuLoader'
import { setupMenuHeader } from '../utils/menu/menuHeader'


export const initializeMenu = () => {
    setupMenuHeader()
    initializeItems('cup')
}


