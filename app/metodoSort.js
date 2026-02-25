const btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOdenarPorPreco.addEventListener('click', aplicarOrdenacaoPorPreco);

function ordenarPorPreco(lista) {
    return [...lista].sort((a, b) => a.preco - b.preco);
}

function aplicarOrdenacaoPorPreco() {
    state.ordenacaoAtual = 'preco';

    state.livrosFiltrados = ordenarPorPreco(state.livrosFiltrados);

    atualizarTela();
}

