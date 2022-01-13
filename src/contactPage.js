export function renderContactPage() {
    generateContactContainer()
}

function generateContactContainer () {
    console.log('generating contact container');

    const contactContainer = document.createElement('div');

    contactContainer.id = 'contact-container';
    contactContainer.innerHTML = `this is the contact container`;

    const pageContent = document.getElementById('pageContent');

    pageContent.appendChild(contactContainer);

    return contactContainer

}