function aplicarDesconto(lista) {
    const desconto = 0.3
    
    return lista.map(livro => ({
        ...livro,
        preco: livro.preco - (livro.preco * desconto)
    })) 
}