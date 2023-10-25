function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // se mostra a chave
    value: estoque, // Valor da propriedade
    writable: false, // Impede a modificação da propriedade
    configurable: false, // Impede a exclusão da propriedade
  });
}
const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
