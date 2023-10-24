const pessoa = {
  nome: "pedro",
  sobrenome: "Henrique",
  idade: 20,
  falarNome: function () {
    console.log(`${this.nome} esta falando seu nome`);
  },
};

pessoa.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.falarNome());
console.log(pessoa.getDataNascimento());
