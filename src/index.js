import './style.css';

// Testing styling is working
function stylePage() {
    const content = document.getElementById('content');
    content.classList.add('test');
}

stylePage()