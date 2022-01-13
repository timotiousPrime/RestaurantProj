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
    heroTitle.innerHTML = `this is the hero title`;

    const herotext = document.createElement('p');
    herotext.id = 'hero-text';
    herotext.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure corporis sint quae recusandae repudiandae cum eius dolores.`;

    const heroBtn = document.createElement('button');
    heroBtn.id = 'hero-btn';
    heroBtn.innerHTML = `Magic`;

    heroCard.appendChild(heroTitle);
    heroCard.appendChild(herotext);
    heroCard.appendChild(heroBtn);
    

    return heroCard
}
