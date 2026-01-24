// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
// Seleciona as tags meta de cor do tema que adicionamos no HTML
const themeMeta = document.querySelectorAll('meta[name="theme-color"]');

// Função para atualizar a cor da barra do navegador
function updateBrowserBarColor(isLight) {
    themeMeta.forEach(meta => {
        // Se for modo claro, usa branco. Se não (escuro), usa o azul do seu site.
        meta.setAttribute('content', isLight ? '#ffffff' : '#0b1622');
    });
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    updateBrowserBarColor(true); // Atualiza para branco ao carregar
} else {
    updateBrowserBarColor(false); // Atualiza para escuro ao carregar
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');

    // Update Icon and Browser Bar
    if (isLight) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
        updateBrowserBarColor(true);
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
        updateBrowserBarColor(false);
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
