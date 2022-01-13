function component() {
    const ele = document.createElement('div');
    ele.innerHTML = 'Hello webpack';

    return ele;
}

const contentDiv = document.getElementById('content');
contentDiv.appendChild(component());