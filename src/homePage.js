export function renderHomePage() {
    generateHomeContainer()
}

export function generateHomeContainer () {
    console.log('generating home container');

    const homeContainer = document.createElement('div');

    homeContainer.id = 'home-container';
    homeContainer.innerHTML = `this is the home container`;

    const pageContent = document.getElementById('pageContent');

    pageContent.appendChild(homeContainer);

    return homeContainer

}
