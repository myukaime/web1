function renderNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const navContent = document.createElement('div');
    navContent.className = 'nav-content';
    
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = `
        <span class="logo-text bebas">${appData.logo.text}</span>
    `;
    
    const navMenu = document.createElement('div');
    navMenu.className = 'nav-menu';
    appData.navigation.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = `nav-link ${item.active ? 'active' : ''}`;
        link.textContent = item.name;
        navMenu.appendChild(link);
    });
    
    const searchBtn = document.createElement('button');
    searchBtn.className = 'search-btn';
    searchBtn.innerHTML = `
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
    `;
    
    navContent.appendChild(logo);
    navContent.appendChild(navMenu);
    navContent.appendChild(searchBtn);
    container.appendChild(navContent);
    navbar.appendChild(container);
    
    return navbar;
}

function renderSlideNumbers() {
    const slideNumbersDiv = document.createElement('div');
    slideNumbersDiv.className = 'slide-numbers';
    
    appData.slideNumbers.forEach((num, index) => {
        const slideNum = document.createElement('div');
        slideNum.className = `slide-number ${index === 0 ? 'active' : ''}`;
        slideNum.textContent = num;
        slideNum.addEventListener('click', function() {
            document.querySelectorAll('.slide-number').forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            changeBackground(index);
        });
        slideNumbersDiv.appendChild(slideNum);
    });
    
    return slideNumbersDiv;
}

function changeBackground(index) {
    const heroBg = document.querySelector('.hero-bg');
    heroBg.style.opacity = '0';
    
    setTimeout(() => {
        heroBg.style.backgroundImage = `url('${appData.backgrounds[index]}')`;
        heroBg.style.opacity = '1';
    }, 300);
}

function renderHero() {
    const hero = document.createElement('section');
    hero.className = 'hero-bg';
    
    hero.appendChild(renderSlideNumbers());
    
    const container = document.createElement('div');
    container.className = 'container';
    
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';
    
    const redCircle = document.createElement('div');
    redCircle.className = 'red-circle';
    redCircle.textContent = appData.hero.icon;
    
    const title = document.createElement('h1');
    title.className = 'hero-title bebas';
    title.innerHTML = appData.hero.title.join('<br/>');
    
    const features = document.createElement('div');
    features.className = 'features';
    
    appData.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'feature';
        featureDiv.innerHTML = `
            <p class="feature-text">${feature.text}</p>
            <a href="#tours" class="feature-link">${feature.link} <span>→</span></a>
        `;
        features.appendChild(featureDiv);
    });
    
    heroContent.appendChild(redCircle);
    heroContent.appendChild(title);
    heroContent.appendChild(features);
    container.appendChild(heroContent);
    hero.appendChild(container);
    
    return hero;
}

function initApp() {
    const app = document.getElementById('app');
    app.appendChild(renderNavbar());
    app.appendChild(renderHero());
    
    setTimeout(() => {
        changeBackground(0);
    }, 100);
}

document.addEventListener('DOMContentLoaded', initApp);
