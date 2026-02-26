const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', handleClick));

function handleClick(event) {
    const botao = event.currentTarget;

    atualizarBotaoAtivo(botao);

    if (botao.id === 'btnOrdenarPorPreco') {
        aplicarOrdenacaoPorPreco();
        return;
    }

    filtrarLivros(botao.value);
}

function atualizarBotaoAtivo(botaoAtivo) {
    botoes.forEach(btn => btn.classList.remove('btn--ativo'));
    botaoAtivo.classList.add('btn--ativo');
}

function filtrarPorCategoria(categoria) {
    return state.livros.filter(livro => livro.categoria === categoria);
}

function filtrarLivros(categoria) {
    state.filtroAtual = categoria;

    state.livrosFiltrados = categoria === 'disponivel'
        ? filtrarPorDisponibilidade()
        : filtrarPorCategoria(categoria);

    atualizarTela();
}

function filtrarPorDisponibilidade() {
    return state.livros.filter(livro => livro.quantidade > 0);
}