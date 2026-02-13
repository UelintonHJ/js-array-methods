const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const categoria = this.value

    state.filtroAtual = categoria

    state.livrosFiltrados =
        categoria == 'disponivel' 
        ? filtrarPorDisponibilidade() 
        : filtrarPorCategoria(categoria)

    atualizarTela()
}

function filtrarPorCategoria(categoria) {
    return state.livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return state.livros.filter(livro => livro.quantidade > 0)
}