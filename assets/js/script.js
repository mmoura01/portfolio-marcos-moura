const translations = {
    pt: {
        "nav-home": "Home", "nav-about": "Sobre", "nav-skills": "Skills", "nav-projects": "Projetos", "nav-contact": "Contato",
        "hero-greeting": "Olá, eu sou", "hero-role": "Desenvolvedor Web em formação",
        "btn-projects": "Ver Projetos", "btn-contact": "Contato",
        "about-title": "Sobre Mim", "about-description": "Sou um estudante apaixonado por tecnologia e desenvolvimento web. Estou construindo minha jornada na programação.",
        "skills-title": "Minhas Skills", "projects-title": "Projetos Recentes",
        "contact-subtitle": "Vamos conversar?", "btn-send": "Enviar Mensagem",
        "ph-name": "Seu Nome", "ph-email": "Seu E-mail", "ph-message": "Sua Mensagem"
    },
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-skills": "Skills", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-greeting": "Hi, I am", "hero-role": "Web Developer in Training",
        "btn-projects": "View Projects", "btn-contact": "Contact",
        "about-title": "About Me", "about-description": "I am a student passionate about technology and web development.",
        "skills-title": "My Skills", "projects-title": "Recent Projects",
        "contact-subtitle": "Let's talk?", "btn-send": "Send Message",
        "ph-name": "Your Name", "ph-email": "Your Email", "ph-message": "Your Message"
    }
};

const langSelect = document.getElementById('language-select');

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[lang][key];
    });
}

langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));

ScrollReveal().reveal('.home__content, .skill__card, .project__card', {
    origin: 'top', distance: '60px', duration: 2000, delay: 200, interval: 100
});

window.onload = () => updateLanguage('pt');
