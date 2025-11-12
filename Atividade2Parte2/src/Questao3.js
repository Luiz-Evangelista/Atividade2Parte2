const produtosJSON = `{
  "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.90},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
  ]
}`;

function filtrarProdutosCaros(json) {
  const dados = JSON.parse(json);
  return dados.produtos
    .filter(p => p.preco > 50)
    .map(p => p.nome);
}

console.log(filtrarProdutosCaros(produtosJSON))