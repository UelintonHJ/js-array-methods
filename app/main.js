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
    exibirOsLivrosNaTela(state.livrosFiltrados)
}