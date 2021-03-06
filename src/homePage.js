export function renderHomePage() {
    generateHomeContainer()
}

export function generateHomeContainer () {
    console.log('generating home container');

    const homeContainer = document.createElement('div');

    homeContainer.id = 'home-container';
    // homeContainer.innerHTML = `this is the home container`;

    const pageContent = document.getElementById('pageContent');

    pageContent.appendChild(homeContainer);
    homeContainer.appendChild(generateHeroCard());


    return homeContainer
}

function generateHeroCard(){
    const heroCard = document.createElement('div');
    heroCard.id = 'hero-card';
    // heroCard.innerHTML = `this is the hero card`;

    const heroTitle = document.createElement('h4');
    heroTitle.id = 'hero-title';
    heroTitle.innerText = `this is the hero title`;

    const heroText = document.createElement('p');
    heroText.id = 'hero-text';
    heroText.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure corporis sint quae recusandae repudiandae cum eius dolores.`;

    const heroBtn = document.createElement('button');
    heroBtn.id = 'hero-btn';
    heroBtn.innerText = `Magic`;

    heroCard.appendChild(heroTitle);
    heroCard.appendChild(heroText);
    heroCard.appendChild(heroBtn);
    

    return heroCard
}
