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
        ativarBotao(btnFront);
        state.livrosFiltrados = filtrarPorCategoria(state.livros, 'front-end');
        atualizarTela();
    });

    btnBack.addEventListener('click', () => {
        ativarBotao(btnBack);
        state.livrosFiltrados = filtrarPorCategoria(state.livros, 'back-end');
        atualizarTela();
    });

    btnDados.addEventListener('click', () => {
        ativarBotao(btnDados);
        state.livrosFiltrados = filtrarPorCategoria(state.livros, 'dados');
        atualizarTela();
    });

    btnDisponiveis.addEventListener('click', () => {
        ativarBotao(btnDisponiveis);
        state.livrosFiltrados = filtrarPorDisponibilidade(state.livros);
        atualizarTela();
    });

    btnOrdenar.addEventListener('click', () => {
        ativarBotao(btnOrdenar);
        state.livrosFiltrados = ordenarPorPreco([...state.livrosFiltrados]);
        atualizarTela();
    });
}

function ativarBotao(btn) {
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('btn--ativo'));
    btn.classList.add('btn--ativo');
}