const botaoMenu = document.querySelector('.menu-hamburguer');
const navegacao = document.querySelector('#navegacao');

function fecharMenu() {
    navegacao.classList.remove('menu-aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
    botaoMenu.setAttribute('aria-label', 'Abrir menu');
}

botaoMenu.addEventListener('click', () => {
    const aberto = navegacao.classList.toggle('menu-aberto');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
    botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

navegacao.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) fecharMenu();
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && navegacao.classList.contains('menu-aberto')) {
        fecharMenu();
        botaoMenu.focus();
    }
});

const gradePratos = document.querySelector('.grade-pratos');
const listaPedido = document.querySelector('#lista-pedido');
const pedidoVazio = document.querySelector('#pedido-vazio');
const totalPedido = document.querySelector('#total-pedido');
const contadorPedido = document.querySelector('#contador-pedido');
const limparPedido = document.querySelector('#limpar-pedido');
const mensagemPedido = document.querySelector('#mensagem-pedido');
const chaveStorage = 'pedidoRecantoV2';
const catalogo = new Map(
    [...gradePratos.querySelectorAll('.card-prato')].map((card) => [
        card.dataset.prato,
        { nome: card.querySelector('h3').textContent, preco: Number(card.dataset.preco) }
    ])
);

function lerPedido() {
    try {
        const atual = localStorage.getItem(chaveStorage);
        if (atual !== null) {
            const salvo = JSON.parse(atual);
            return Array.isArray(salvo) ? salvo.filter((id) => catalogo.has(id)) : [];
        }
        // Preserva os pedidos criados pela primeira versão do projeto.
        const antigo = JSON.parse(localStorage.getItem('pedidosRecanto') || '[]');
        if (!Array.isArray(antigo)) return [];
        return antigo.map((nome) => [...catalogo].find(([, prato]) => prato.nome === nome)?.[0]).filter(Boolean);
    } catch {
        return [];
    }
}

let pedido = lerPedido();
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function salvarPedido() {
    try {
        localStorage.setItem(chaveStorage, JSON.stringify(pedido));
        localStorage.removeItem('pedidosRecanto');
    } catch {
        mensagemPedido.textContent = 'O navegador não permitiu salvar o pedido. Ele ficará disponível apenas nesta visita.';
    }
}

function renderizarPedido() {
    listaPedido.replaceChildren();
    pedido.forEach((id, indice) => {
        const prato = catalogo.get(id);
        const item = document.createElement('li');
        item.className = 'item-pedido';

        const descricao = document.createElement('span');
        descricao.textContent = `${prato.nome} — ${moeda.format(prato.preco / 100)}`;

        // Correção de acessibilidade: remover usa um botão real com nome específico, operável por teclado.
        const remover = document.createElement('button');
        remover.type = 'button';
        remover.className = 'remover-item';
        remover.dataset.indice = String(indice);
        remover.textContent = 'Remover';
        remover.setAttribute('aria-label', `Remover ${prato.nome} do pedido`);

        item.append(descricao, remover);
        listaPedido.append(item);
    });

    const quantidade = pedido.length;
    const centavos = pedido.reduce((soma, id) => soma + catalogo.get(id).preco, 0);
    pedidoVazio.hidden = quantidade > 0;
    limparPedido.disabled = quantidade === 0;
    totalPedido.textContent = moeda.format(centavos / 100);
    contadorPedido.textContent = `(${quantidade})`;
    contadorPedido.setAttribute('aria-label', `${quantidade} ${quantidade === 1 ? 'item' : 'itens'}`);
}

// Delegação: um único ouvinte atende todos os botões da grade.
gradePratos.addEventListener('click', (evento) => {
    const botao = evento.target.closest('.btn-pedir');
    if (!botao || !gradePratos.contains(botao)) return;
    const card = botao.closest('.card-prato');
    const id = card.dataset.prato;
    pedido.push(id);
    salvarPedido();
    renderizarPedido();
    mensagemPedido.textContent = `${catalogo.get(id).nome} adicionado. ${pedido.length} itens no pedido.`;
});

// Delegação: um único ouvinte atende todos os itens, inclusive os recriados após a renderização.
listaPedido.addEventListener('click', (evento) => {
    const botao = evento.target.closest('.remover-item');
    if (!botao || !listaPedido.contains(botao)) return;
    const indice = Number(botao.dataset.indice);
    const [removido] = pedido.splice(indice, 1);
    salvarPedido();
    renderizarPedido();
    mensagemPedido.textContent = `${catalogo.get(removido).nome} removido do pedido.`;
    if (pedido.length) listaPedido.querySelector('.remover-item')?.focus();
    else limparPedido.focus();
});

limparPedido.addEventListener('click', () => {
    pedido = [];
    salvarPedido();
    renderizarPedido();
    mensagemPedido.textContent = 'Pedido limpo.';
});

renderizarPedido();

const formulario = document.querySelector('#form-sugestao');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!formulario.reportValidity()) return;
    // Texto digitado entra no DOM via textContent, sem interpretar HTML.
    document.querySelector('#sugestao-nome').textContent = formulario.elements.nome.value.trim();
    document.querySelector('#sugestao-prato').textContent = formulario.elements.prato.value.trim();
    document.querySelector('#sugestao-detalhes').textContent = formulario.elements.detalhes.value.trim();
    document.querySelector('#resultado-sugestao').hidden = false;
});

const formAvaliacao = document.querySelector('#form-avaliacao');
const resultadoAvaliacao = document.querySelector('#resultado-avaliacao');
const chaveAvaliacao = 'avaliacaoCardapioRecantoV1';

function atualizarEstrelas(nota) {
    formAvaliacao.querySelectorAll('input[name="nota"]').forEach((input) => {
        input.nextElementSibling.classList.toggle('selecionada', Number(input.value) <= nota);
    });
}

try {
    const notaSalva = Number(localStorage.getItem(chaveAvaliacao));
    if (Number.isInteger(notaSalva) && notaSalva >= 1 && notaSalva <= 5) {
        formAvaliacao.querySelector(`#nota-${notaSalva}`).checked = true;
        atualizarEstrelas(notaSalva);
        resultadoAvaliacao.textContent = `Sua nota salva: ${notaSalva} de 5 estrelas.`;
    }
} catch {
    // O formulário continua utilizável quando o armazenamento está indisponível.
}

// Os radios nativos oferecem Tab, setas e Espaço sem recriar o padrão de teclado em JavaScript.
formAvaliacao.addEventListener('change', (evento) => {
    if (evento.target.matches('input[name="nota"]')) atualizarEstrelas(Number(evento.target.value));
});

formAvaliacao.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!formAvaliacao.reportValidity()) return;
    const nota = Number(formAvaliacao.elements.nota.value);
    try {
        localStorage.setItem(chaveAvaliacao, String(nota));
        resultadoAvaliacao.textContent = `Sua nota salva: ${nota} de 5 estrelas.`;
    } catch {
        resultadoAvaliacao.textContent = `Sua nota nesta visita: ${nota} de 5 estrelas. O navegador não permitiu salvá-la.`;
    }
});
