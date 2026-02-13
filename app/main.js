const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

init()

async function init() {
const res = await fetch(endpointDaAPI)
const data = await res.json()

state.livros = aplicarDesconto(data)
state.livrosFiltrados = state.livros

atualizarTela()
}

function atualizarTela() {
    const lista = state.livrosFiltrados

    renderizarLivros(lista)

    const total = calcularTotalDisponiveis(lista)

    renderizarTotal(total)
}