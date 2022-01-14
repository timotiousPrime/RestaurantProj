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
    pageContent.appendChild(generateContactInfoCard());
    pageContent.appendChild(generateMapCard());

    return contactContainer

}

function generateContactInfoCard(){
    const contactInfoCard = document.createElement('div');
    contactInfoCard.id = 'contact-info-card';
    contactInfoCard.innerHTML = `this is the contact info card`;

    const contactInfoTitle = document.createElement('h4');
    contactInfoTitle.id = 'contact-info-title';
    contactInfoTitle.innerText = `this is the contact info title`;

    const contactInfoText = document.createElement('p');
    contactInfoText.id = 'contact-info-text';
    contactInfoText.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure corporis sint quae recusandae repudiandae cum eius dolores.`;

    contactInfoCard.appendChild(contactInfoTitle);
    contactInfoCard.appendChild(contactInfoText);
    
    return contactInfoCard
}

function generateMapCard(){
    const mapCard = document.createElement('div');
    mapCard.id = 'map-card';
    mapCard.innerHTML = `this is the map card`;

    return mapCard
}