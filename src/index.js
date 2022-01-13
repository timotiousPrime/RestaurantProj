import './style.css';
import { renderHeaderFooter } from './headerFooter';
import { renderHomePage, generateHomeContainer } from './homePage';
import { renderMenuPage } from './menuPage';
import { renderContactPage } from './contactPage';

renderHeaderFooter()
generateHomeContainer()
listenForPageClick()


function listenForPageClick(){
    const ele = document.querySelectorAll('li')
    ele.forEach(element => {
        element.addEventListener('click', (e) => {
            const pageId = e.target.id;
            // console.log(pageId);
            renderPage(pageId);
        })
    });
}

// TODO: Create a module for this function
function renderPage(pageId){
    // Clear the page content
    removePrevPage();

    // Generate the page content
    switch(pageId) {

        case 'home-btn':
            renderHomePage();
            break;

        case 'menu-btn':
            renderMenuPage();
            break;

        case 'contact-btn':
            renderContactPage();
            break;

        default:
            console.log('No page found');
            break;
    }
}

// TODO: Create a module for this function
function removePrevPage() {
    const pageContent = document.getElementById('pageContent');
    pageContent.innerHTML = '';
}
