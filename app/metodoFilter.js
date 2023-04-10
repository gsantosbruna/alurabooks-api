const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  console.table(livros);
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCateogira(categoria);
  exibirLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponivels(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveis(valorTotal);
  }
}

function filtrarPorCateogira(categoria) {
  return livros.filter((livro) => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}
