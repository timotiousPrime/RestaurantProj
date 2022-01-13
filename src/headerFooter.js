export function renderHeaderFooter() {
    const content = document.createElement('div');
    content.id = 'content';
    content.innerHTML = `
    <header class="header">
            <div class="heading">
                <img src="" alt="" srcset="">
                <h1>Rotacon Parts Creator</h1>
                <p>Generate and track projects and parts</p>
            </div>
            <nav>
                <ul>
                    <li id="home-btn" class="tab-btn">Home</li>
                    <li id="menu-btn" class="tab-btn">Menu</li>
                    <li id="contact-btn" class="tab-btn">Contact</li>
                </ul>
            </nav>
        </header>
        <div id="pageContent"">

        </div>
        <footer>Built by TimotiousPrime</footer>
    `;

    document.body.appendChild(content);

    return content
}