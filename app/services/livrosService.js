const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

export async function buscarLivros() {
    const res = await fetch(endpointDaAPI);
    return res.json();
}

export function aplicarDesconto(lista, desconto = 0.3) {
    return lista.map(livro => ({
        ...livro,
        preco: livro.preco - (livro.preco * desconto)
    }));
}

export function filtrarPorCategoria(lista, categoria) {
    return lista.filter(livro => livro.categoria === categoria);
}

export function filtrarPorDisponibilidade(lista) {
    return lista.filter(livro => livro.quantidade > 0);
}

export function ordenarPorPreco(lista) {
    return [...lista].sort((a, b) => a.preco - b.preco);
}

export function calcularTotalDisponiveis(lista) {
    return lista
        .filter(livro => livro.quantidade > 0)
        .reduce((acc, livro) => acc + livro.preco, 0);
}