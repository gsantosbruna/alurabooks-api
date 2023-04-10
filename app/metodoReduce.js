function calcularValorTotalDeLivrosDisponivels(livros) {
  return livros
    .reduce((acumulador, livro) => {
      return acumulador + livro.preco;
    }, 0)
    .toFixed(2);
}
