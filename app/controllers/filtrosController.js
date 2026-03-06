import {
    filtrarPorCategoria,
    filtrarPorDisponibilidade,
    ordenarPorPreco
} from '../services/livrosService.js';

import { state } from '../state.js';

export function registrarEventos(atualizarTela) {
    const btnFront = document.getElementById('btnFiltrarLivrosFront');
    const btnBack = document.getElementById('btnFiltrarLivrosBack');
    const btnDados = document.getElementById('btnFiltrarLivrosDados');
    const btnDisponiveis = document.getElementById('btnLivrosDisponiveis');
    const btnOrdenar = document.getElementById('btnOrdenarPorPreco');

    btnFront.addEventListener('click', () => {
        state.livrosFiltrados = filtrarPorCategoria(state.livros, 'front-end');
        atualizarTela();
    });

    btnBack.addEventListener('click', () => {
        state.livrosFiltrados = filtrarPorCategoria(state.livros, 'back-end');
        atualizarTela();
    });

    btnDados.addEventListener('click', () => {
        state.livrosFiltrados = filtrarPorCategoria(state.livros, 'dados');
        atualizarTela();
    });

    btnDisponiveis.addEventListener('click', () => {
        state.livrosFiltrados = filtrarPorDisponibilidade(state.livrosFiltrados);
        atualizarTela();
    });

    btnOrdenar.addEventListener('click', () => {
        state.livrosFiltrados = ordenarPorPreco(state.livrosFiltrados);
        atualizarTela();
    });
}