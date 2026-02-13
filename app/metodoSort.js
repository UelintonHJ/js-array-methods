let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    state.ordenacaoAtual = 'preco'

    state.livrosFiltrados = [...state.livrosFiltrados]
        .sort((a, b) => a.preco - b.preco)

    atualizarTela()
}