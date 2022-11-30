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
