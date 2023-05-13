
import { headerScroll , hamburguer } from './utils/header.js'
import { filter } from './utils/filter.js'

document.addEventListener('DOMContentLoaded', () => {
    try {
        headerScroll();
        hamburguer();
        filter();
    } catch (error) {
        console.error(error);
    }
})