document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Menu Hambúrguer
    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuMobile = document.querySelector('.menu');

    if (botaoMenu && menuMobile) {
        botaoMenu.addEventListener('click', () => {
            menuMobile.classList.toggle('menu-aberto');
            const expandido = menuMobile.classList.contains('menu-aberto');
            botaoMenu.setAttribute('aria-expanded', expandido);
        });
    }

    // 2. Lógica de Pedidos com LocalStorage (Aula 11)
    const botoesPedir = document.querySelectorAll('.btn-pedir');

    // Função auxiliar para ler os pedidos guardados na memória do navegador
    function obterPedidosSalvos() {
        const pedidos = localStorage.getItem('pedidosRecanto');
        return JSON.parse(pedidos) || [];
    }

    botoesPedir.forEach((botao) => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault(); // Evita recarregar a página ao clicar no link

            const cardPrato = botao.closest('.card-prato');
            if (cardPrato) {
                const nomePrato = cardPrato.querySelector('h3').textContent;
                
                // Lê a lista atual, adiciona o novo prato e guarda novamente
                const pedidosAtualizados = obterPedidosSalvos();
                pedidosAtualizados.push(nomePrato);
                localStorage.setItem('pedidosRecanto', JSON.stringify(pedidosAtualizados));

                alert(`Boa escolha! "${nomePrato}" foi guardado no teu pedido. Tens atualmente ${pedidosAtualizados.length} item(s) selecionado(s).`);
            }
        });
    });
});