//resposta 1
const funcionario = {
  codigo: 10,
  nome: "John"
};

// resposta 2
const funcionario2: {codigo: number, nome:string} = {
  codigo: 15,
  nome: "Mario"
};

// resposta 3
interface Funcionario {
  codigo: number,
  nome: string,
}

// resposta criando Objeto
const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 20,
funcionarioObj.nome = "Maria";

const funcionarioObj2: Funcionario = {
  codigo: 25,
  nome: "Pedro"
};