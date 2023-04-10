let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarPorPreco);

function ordenarPorPreco() {
  livros.sort((a, b) => a.preco - b.preco);
  exibirLivrosNaTela(livros);
}
