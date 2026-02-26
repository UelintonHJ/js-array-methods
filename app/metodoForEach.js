const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function renderizarLivros(lista) {
  if(!lista.length) {
    elementoParaInserirLivros.innerHTML = `
      <p class="empty-state">
        Nenhum livro encontrado para o filtro selecionado.
      </p>
    `;
    return;
  }

  const html = lista.map(livro => {
    const disponibilidadeClasse = 
      livro.quantidade > 0 
      ? 'livro__imagens' 
      : 'livro__imagens indisponivel';

    return `
     <div class="livro">
        <img class="${disponibilidadeClasse}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo"> ${livro.titulo} </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
    `;
  }).join('');

  elementoParaInserirLivros.innerHTML = html;
}

function calcularTotalDisponiveis(lista) {
  return lista
    .filter(livro => livro.quantidade > 0)
    .reduce((acc, livro) => acc + Number(livro.preco || 0), 0)
}

function renderizarTotal(valor) {
  const valorFormatado = valor.toFixed(2).replace('.', ',')

  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis"> 
      <p>
        Todos os livros desta categoria por 
        R$ <span id="valor">${valorFormatado}</span>
      </p>
    </div>
  `
}