/*=============== TRADUÇÕES ===============*/
const translations = {
    pt: {
        "nav-home": "Home", "nav-about": "Sobre", "nav-skills": "Skills", "nav-projects": "Projetos", "nav-contact": "Contato",
        "hero-greeting": "Olá, eu sou", "hero-role": "Desenvolvedor Web em formação",
        "btn-projects": "Ver Projetos", "btn-contact": "Contato",
        "about-title": "Sobre Mim",
        "about-description": "Sou um estudante apaixonado por tecnologia e desenvolvimento web. Estou construindo minha jornada na programação, aprendendo e aplicando conceitos modernos para criar experiências digitais incríveis.",
        "skills-title": "Minhas Skills", "projects-title": "Projetos Recentes",
        "project1-desc": "Gerador de links dinâmicos focado em UX e produtividade para redes sociais.",
        "project2-desc": "Dashboard de controle financeiro com cálculos automáticos e persistência de dados.",
        "project-code": "Código"
    },
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-skills": "Skills", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-greeting": "Hi, I am", "hero-role": "Web Developer in Training",
        "btn-projects": "View Projects", "btn-contact": "Contact Me",
        "about-title": "About Me",
        "about-description": "I am a student passionate about technology and web development. I am building my journey in programming, learning and applying modern concepts to create amazing digital experiences.",
        "skills-title": "My Skills", "projects-title": "Recent Projects",
        "project1-desc": "Dynamic link generator focused on UX and productivity for social media.",
        "project2-desc": "Financial control dashboard with automatic calculations and data persistence.",
        "project-code": "Code"
    },
    es: {
        "nav-home": "Inicio", "nav-about": "Sobre Mí", "nav-skills": "Habilidades", "nav-projects": "Proyectos", "nav-contact": "Contacto",
        "hero-greeting": "Hola, soy", "hero-role": "Desarrollador Web en formación",
        "btn-projects": "Ver Proyectos", "btn-contact": "Contacto",
        "about-title": "Sobre Mí",
        "about-description": "Soy un estudiante apasionado por la tecnología y el desarrollo web. Estoy construyendo mi camino en la programación, aprendiendo y aplicando conceptos modernos.",
        "skills-title": "Mis Habilidades", "projects-title": "Proyectos Recientes",
        "project1-desc": "Generador de enlaces dinámicos centrado en UX y productividad.",
        "project2-desc": "Panel de control financiero con cálculos automáticos y persistencia de datos.",
        "project-code": "Código"
    }
};

/*=============== LÓGICA DE IDIOMA ===============*/
const langSelect = document.getElementById('language-select');
langSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferred-lang', lang);
}

/*=============== TEMA DARK/LIGHT ===============*/
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeButton.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('selected-theme', currentTheme);
});

/*=============== SCROLL REVEAL ANIMAÇÕES ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

sr.reveal(`.home__content, .about__img-wrapper, .skills__grid, .projects__grid, .footer`);
sr.reveal(`.home__title`, {delay: 400});
sr.reveal(`.about__data`, {origin: 'right', delay: 400});

/*=============== CARREGAMENTO INICIAL ===============*/
window.onload = () => {
    // Carregar Idioma
    const savedLang = localStorage.getItem('preferred-lang') || 'pt';
    langSelect.value = savedLang;
    updateLanguage(savedLang);

    // Carregar Tema
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
};
