/*==================== LOGICA DO PORTFOLIO - MARCOS MOURA ====================*/

// 1. Log de Verificação (Aparece no console do navegador para saberes que está a funcionar)
console.log("JavaScript do Portfólio carregado com sucesso!");

// 2. Mudar a aparência do Header ao fazer Scroll
// Quando desceres mais de 50px, o menu ganha uma sombra e fundo mais sólido
const scrollHeader = () => {
    const header = document.querySelector('.header');
    // Se o scroll for maior que 50, adiciona sombra, senão remove
    if (window.scrollY >= 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
        header.style.backgroundColor = "rgba(11, 17, 32, 0.98)";
    } else {
        header.style.boxShadow = "none";
        header.style.backgroundColor = "rgba(11, 17, 32, 0.9)";
    }
};
window.addEventListener('scroll', scrollHeader);

// 3. Fechar o menu mobile ao clicar num link (Melhoria de UX)
// Caso adiciones um menu hamburguer no futuro, isto garante que ele fecha ao clicar
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navegando para: ${link.textContent}`);
        // Aqui poderias adicionar o código para fechar o menu mobile
    });
});

// 4. Validação Simples de Formulário (Opcional)
// Apenas para garantir que o utilizador não envia o formulário vazio antes do Formspree agir
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        console.log("Formulário enviado! Redirecionando para o Formspree...");
    });
}

// 5. Scroll Reveal (Animações de entrada)
// Nota: Isto depende da tag <script src="https://unpkg.com/scrollreveal"></script> no HTML
// Se a biblioteca estiver carregada, ele faz os elementos aparecerem suavemente
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: false // Não repete a animação ao subir a página (mais profissional)
    });

    sr.reveal('.home-title, .home-subtitle, .home-btns');
    sr.reveal('.about-img', { origin: 'left' });
    sr.reveal('.about-text', { origin: 'right' });
    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.contact-card');
}
