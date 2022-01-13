import './style.css';
import { renderHomePage } from './homePage';

function loadPage() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', () => {
        renderHomePage();
    });

    menuBtn.addEventListener('click', () => {
        console.log('Menu button clicked');
    });

    contactBtn.addEventListener('click', () => {
        console.log('Contact button clicked');
    });
}

loadPage()