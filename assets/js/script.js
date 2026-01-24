const translations = {
    pt: {
        "nav-home": "Home", "nav-about": "Sobre", "nav-skills": "Skills", "nav-projects": "Projetos", "nav-contact": "Contato",
        "hero-greeting": "Olá, eu sou", "hero-role": "Desenvolvedor Web em formação",
        "btn-projects": "Ver Projetos", "btn-contact": "Contato",
        "about-title": "Sobre Mim", "about-description": "Sou um estudante apaixonado por tecnologia e desenvolvimento web. Estou construindo minha jornada na programação, aprendendo e aplicando conceitos modernos.",
        "skills-title": "Minhas Skills", "projects-title": "Projetos Recentes",
        "project1-desc": "Gerador de links dinâmicos focado em UX.", "project2-desc": "Dashboard de controle financeiro profissional.",
        "project-code": "Código", "contact-subtitle": "Vamos conversar?", "contact-text": "Estou disponível para novos projetos.",
        "btn-send": "Enviar Mensagem", "ph-name": "Seu Nome", "ph-email": "Seu E-mail", "ph-message": "Sua Mensagem"
    },
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-skills": "Skills", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-greeting": "Hi, I am", "hero-role": "Web Developer in Training",
        "btn-projects": "View Projects", "btn-contact": "Contact",
        "about-title": "About Me", "about-description": "I am a student passionate about technology and web development.",
        "skills-title": "My Skills", "projects-title": "Recent Projects",
        "project1-desc": "Dynamic link generator focused on UX.", "project2-desc": "Professional financial control dashboard.",
        "project-code": "Code", "contact-subtitle": "Let's talk?", "contact-text": "I am available for new projects.",
        "btn-send": "Send Message", "ph-name": "Your Name", "ph-email": "Your Email", "ph-message": "Your Message"
    },
    es: {
        "nav-home": "Inicio", "nav-about": "Sobre Mí", "nav-skills": "Habilidades", "nav-projects": "Proyectos", "nav-contact": "Contacto",
        "hero-greeting": "Hola, soy", "hero-role": "Desarrollador Web en formación",
        "btn-projects": "Ver Proyectos", "btn-contact": "Contacto",
        "about-title": "Sobre Mí", "about-description": "Soy un estudiante apasionado por la tecnología y el desarrollo web.",
        "skills-title": "Mis Habilidades", "projects-title": "Proyectos Recientes",
        "project1-desc": "Generador de enlaces dinâmicos.", "project2-desc": "Dashboard de finanzas profesional.",
        "project-code": "Código", "contact-subtitle": "¿Hablamos?", "contact-text": "Estoy disponible para nuevos proyectos.",
        "btn-send": "Enviar Mensaje", "ph-name": "Tu Nombre", "ph-email": "Tu Email", "ph-message": "Tu Mensaje"
    }
};

const langSelect = document.getElementById('language-select');
const themeButton = document.getElementById('theme-button');

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[lang][key];
    });
    localStorage.setItem('lang', lang);
}

langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeButton.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

ScrollReveal().reveal('.home__content, .about__img, .skill__card, .project__card, .contact__info', {
    origin: 'top', distance: '60px', duration: 2000, delay: 200, interval: 100
});

window.onload = () => {
    const lang = localStorage.getItem('lang') || 'pt';
    langSelect.value = lang;
    updateLanguage(lang);
    if(localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        themeButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
};
