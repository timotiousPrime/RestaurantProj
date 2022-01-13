export function renderMenuPage() {
    generateMenuContainer()
}

function generateMenuContainer () {
    console.log('generating menu container');

    const menuContainer = document.createElement('div');

    menuContainer.id = 'menu-container';
    menuContainer.innerHTML = `this is the menu container`;

    const pageContent = document.getElementById('pageContent');

    pageContent.appendChild(menuContainer);

    return menuContainer

}