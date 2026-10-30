document.addEventListener('DOMContentLoaded', () => {
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu');

    if (botaoMenu && menuMobile) {
        botaoMenu.addEventListener('click', () => {
            menuMobile.classList.toggle('menu-aberto');
            const expandido = menuMobile.classList.contains('menu-aberto');
            botaoMenu.setAttribute('aria-expanded', expandido);
        });
    }

    const botoesPedir = document.querySelectorAll('.btn-pedir, .btn-primario');

    botoesPedir.forEach((botao) => {
        botao.addEventListener('click', (evento) => {
            if (botao.getAttribute('href') === '#') {
                evento.preventDefault();
            }

            const cardPrato = botao.closest('.card-prato');
            if (cardPrato) {
                const nomePrato = cardPrato.querySelector('h3').textContent;
                alert(`Ótima escolha! O prato "${nomePrato}" foi adicionado ao seu pedido.`);
            }
        });
    });
});