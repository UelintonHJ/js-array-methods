import { criarLivroCard } from '../components/livroCard.js';
import { calcularTotalDisponiveis } from '../services/livrosService.js';

const containerLivros = document.getElementById('livros');
const containerTotal = document.getElementById('valor_total_livros_disponiveis');

export function renderizarLivros(lista) {
    if (!lista.length) {
        containerLivros.innerHTML = `
            <p class="empty-state">
                Nenhum livro encontrado para o filtro selecionado.
            </p>
        `;
        return;
    }

    containerLivros.innerHTML = lista.map(criarLivroCard).join('');
}

export function renderizarTotal(lista) {
    const total = calcularTotalDisponiveis(lista);
    const valorFormatado = total.toFixed(2).replace('.', ',');

    containerTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>
                Todos os livros desta categoria por
                R$ <span>${valorFormatado}</span>
            </p>
        </div>
    `;
}