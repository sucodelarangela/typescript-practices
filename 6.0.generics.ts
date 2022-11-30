// Generics permite criar um componente (através de interfaces ou classes) que pode funcionar em vários tipos em vez de um único. Exemplo:
interface Array<T> {
  /*
   * Determina se um array inclui um certo elemento, retornando true ou false
   * @param searchElement O elemento que se procura (T)
   * @param fromIndex A posição nesse array por onde começar a procurar o elemento
   * Só descobrimos o tipo T quando a interface for implementada
  */
  includes(searchElement: T, fromIndex?: number): boolean;
}

const nomes: Array<string> = ['pessoa1', 'pessoa2', 'pessoa3']; // Aqui, T é uma string

const dias: Array<number> = [5, 25, 28]; // Aqui, T é um number

// FUNÇÕES GENÉRICAS
function funcaoGenerica<T>() { } // declarada dessa forma, aceita qualquer tipo:
funcaoGenerica<number>();
funcaoGenerica<string>();
funcaoGenerica<boolean>();

// Num exemplo mais próximo da realidade, a função genérica abaixo recebe um tipo T, um parâmetro do tipo T e retorna um tipo T
function funcaoGenerica2<T>(value: T): T {
  return value;
}
console.log(funcaoGenerica2<Number>(1)); // 1
console.log(funcaoGenerica2<string>('teste')); // teste
console.log(funcaoGenerica2<boolean>(true)); // true

// Funções genéricas também aceitam mais de um parâmetro
function fun<T, U, V>(args1: T, args2: U, args3: V): V {
  return args3;
}
console.log(fun<string, number, boolean>('teste', 1, true)); // true