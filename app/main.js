import {
    buscarLivros,
    aplicarDesconto
} from './services/livrosService.js';

import { renderizarLivros, renderizarTotal } from './ui/render.js';
import { state } from './state.js';
import { registrarEventos } from './controllers/filtrosController.js';

init()
registrarEventos(atualizarTela)

async function init() {
const data = await buscarLivros();
state.livros = aplicarDesconto(data)
state.livrosFiltrados = state.livros;

atualizarTela();
}

function atualizarTela() {
    renderizarLivros(state.livrosFiltrados);
    renderizarTotal(state.livrosFiltrados);
}