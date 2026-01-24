@@ -1,29 +1,44 @@
Alternância de Tema
const themeToggle = documento.getElementById('toggle-tema');
corpo const  = documento.Corpo;
ícone const = themeToggle. consultaSelector('i');
// Seleciona as tags meta de cor do tema que adicionamos no HTML
const themeMeta = documento.querySelectorAll('meta[name="theme-color"]');

Função para atualizar a cor da barra do navegador
function updateBrowserBarColor(isLight) {
    temameta.forEach(meta => {
        Se for modo claro, usa branco. Se não (escuro), usa o azul do seu site.
        meta.setAttribute('content', isLight? '#ffffff' : '#0b1622');
    });
}

Verifique se preferência de tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'luz') {
    corpo.classList.adicionar ('tema de luz');
    ícone.classList.remover ('fa-moon');
    ícone.classList.adicionar('fa-sun');
    updateBrowserBarColor(true);   Atualiza para branco ao carregar
} senão {
    updateBrowserBarColor(falso);   Atualiza para escuro ao carregar
}

themeToggle.addEventListener('click', () => {
    corpo.classList.toggle('tema de luz');
    const isLight = corpo.classList.contém ('tema de luz');

    Ícone de Atualização
    Ícone de Atualização e Barra do Navegador
    se (isLuz) {
        ícone.classList.remover ('fa-moon');
        ícone.classList.adicionar('fa-sun');
        localStorage.setItem ('tema', 'luz');
        updateBrowserBarColor(true);
    } senão {
        ícone.classList.remover ('fa-sun');
        ícone.classList.adicionar('fa-moon');
        localStorage.setItem ('tema', 'sombrio');
        updateBrowserBarColor(false);
    }
});

@@ -44,7 +59,7 @@
    });
});

Smooth Scroll para IOs/suporte a navegadores antigos (opcional, já que o CSS smooth-scroll cobre a maioria)
Rolo Liso
documentar.querySelectorAll('a[href^="#"]').para cada âncora => {
    âncora.addEventListener('click', função (e) {
        e.preventDefault();
