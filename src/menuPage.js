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

    return menuContainer
}

function generateMenuIntro(){
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
        img: '',
    },
    {
        title: 'Biltong',
        price: '249',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: '',
    },
    {
        title: 'Biltong Sticks',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: '',
    },
    {
        title: 'Ostrich Dry Wors',
        price: '249',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: '',
    },
    {
        title: 'Kudu Biltong',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: '',
    },
    {
        title: 'Kudu Dry Wors',
        price: '329',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: '',
    },
    {
        title: 'Game of the Week',
        price: '299',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
        img: '',
    }
]

