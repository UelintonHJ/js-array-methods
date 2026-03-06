export function criarLivroCard(livro) {
    const disponibilidadeClasse =
        livro.quantidade > 0
            ? 'livro__imagens'
            : 'livro__imagens indisponivel';

    return `
        <div class="livro">
            <img class="${disponibilidadeClasse}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
    `;
}