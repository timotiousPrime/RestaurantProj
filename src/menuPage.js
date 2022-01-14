import './components/menu-components/menuStyles.css';

export function renderMenuPage() {
    generateMenuContainer()
}

function generateMenuContainer () {
    console.log('generating menu container');

    const menuContainer = document.createElement('div');

    menuContainer.id = 'menu-container'
    menuContainer.innerText = `this is the menu container`;

    const pageContent = document.getElementById('pageContent');

    pageContent.appendChild(menuContainer)
    menuContainer.appendChild(generateMenuIntro());
    menuContainer.appendChild(generateMenuItemContainer());

    generateMenuCards(menuItems);


    return menuContainer
}

function generateMenuIntro(){
    console.log('generating menu intro');
    const menuIntroContainer = document.createElement('div')
    menuIntroContainer.id = 'intro-container'

    const introHeading = document.createElement('div')
    introHeading.id = 'intro-heading'
    introHeading.innerText = `this is the menu intro heading`


    const introImg = document.createElement('div')
    introImg.id = 'intro-img'
    introImg.innerText = `this is the menu intro img`

    menuIntroContainer.appendChild(introHeading)
                      .appendChild(introImg)

    return menuIntroContainer
}

const menuItems = [
    {
        title: 'Dry Wors',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    },
    {
        title: 'Biltong',
        price: '249',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    },
    {
        title: 'Biltong Sticks',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    },
    {
        title: 'Ostrich Dry Wors',
        price: '249',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    },
    {
        title: 'Kudu Biltong',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    },
    {
        title: 'Kudu Dry Wors',
        price: '329',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    },
    {
        title: 'Game of the Week',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: 'https://source.unsplash.com/category/food',
    }
]

function generateMenuItemContainer(){
    const menuItemContainer = document.createElement('div');
    menuItemContainer.id = 'menu-item-container';
    console.log(menuItemContainer)
    
    return menuItemContainer
}

function generateMenuCards(menuItemList){
    menuItemList.forEach(menuItem => {
        const menuCard = generateMenuCard(menuItem)
        console.log(menuCard)
        const menuItemContainer = document.getElementById('menu-item-container');
        menuItemContainer.appendChild(menuCard)
    })
}

function generateMenuCard(menuItem){
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    // heroCard.innerHTML = `this is the hero card`;

    const menuItemTitle = document.createElement('h5');
    menuItemTitle.classList.add('menu-item-title');
    menuItemTitle.innerText = `${menuItem.title}`;

    const menuItemDesc = document.createElement('p');
    menuItemDesc.classList.add('menu-item-desc');
    menuItemDesc.innerText = `${menuItem.desc}`;
    
    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('menu-item-price');
    menuItemPrice.innerText = `R${menuItem.price}/kg`;

    const menuItemImg = document.createElement('img');
    menuItemImg.classList.add('menu-item-img');
    menuItemImg.src = `${menuItem.img}`;

    menuCard.appendChild(menuItemTitle)
    menuCard.appendChild(menuItemDesc)
    menuCard.appendChild(menuItemPrice)
    menuCard.appendChild(menuItemImg)

    // console.log(menuCard)
    
    return menuCard
}