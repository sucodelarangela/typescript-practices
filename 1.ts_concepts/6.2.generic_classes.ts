// Também podemos passar parâmetros genéricos para uma classe
class ClasseGenerica<T> implements InterfaceGenerica<T> {
  private arr: Array<T> = [];

  adicionaValor(item: T) {
    this.arr.push(item);
  }

  retornaValores() {
    return this.arr;
  }

  removeItem(item: T) {
    let index = this.arr.indexOf(item);
    if (index > -1) {
      this.arr.splice(index, 1);
    }
  }
}

let classeGenerica1 = new ClasseGenerica<number>();
classeGenerica1.adicionaValor(1);
classeGenerica1.adicionaValor(2);
classeGenerica1.adicionaValor(3);
console.log(classeGenerica1.retornaValores()); // [ 1, 2, 3 ]
classeGenerica1.removeItem(2);
console.log(classeGenerica1.retornaValores()); // [ 1, 3 ]

let classeGenerica2 = new ClasseGenerica<string>();
classeGenerica2.adicionaValor('Homem de Ferro');
classeGenerica2.adicionaValor('Homem Aranha');
classeGenerica2.adicionaValor('Mística');
console.log(classeGenerica2.retornaValores()); // ['Homem de Ferro', 'Homem Aranha', 'Mística]
classeGenerica2.removeItem('Homem de Ferro');
console.log(classeGenerica2.retornaValores()); // ['Homem Aranha', 'Mística]

// INTERFACE GENÉRICA será implementada na classe acima
interface InterfaceGenerica<I> {
  removeItem(item: I);
}