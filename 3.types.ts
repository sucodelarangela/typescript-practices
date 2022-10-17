// Types

// Boolean: true ou false
let ativo: boolean
ativo = false
ativo = true

let ativo2: boolean = true

// Number: floating, decimal, hex, octal...
let octal: number = 0o745
let binary: number = 0b1111
let decimal: number = 34
let hex: number = 0xf34d

// String: também pode ser usado com template literals
let cor: string = 'verde'
cor = 'azul'
let nome: string = 'Anders Hejlsberg'
let idade: number = 58
let sentence: string = `Olá, meu nome é ${nome}, eu tenho ${idade} anos.`

// métodos comuns em string:
// Length: tamanho de uma string
console.log(sentence.length) // 51
// IndexOf: posição de um caractere ou string. Caso não exista, retorna o valor -1
console.log(sentence.indexOf('nome')) // 9
console.log(sentence.indexOf('idade')) // -1 (não existe)
console.log(sentence.indexOf('!')) // -1 (não existe)

// Array: pode ser declarada com type[] ou com Array<type>
let numeros: number[] = [1, 2, 3] // number array
let textos: string[] = ['exemplo 1', 'exemplo 2', 'exemplo 3'] // string array
let outrosNumberos: Array<number> = [4, 5, 6] // number array
let outrosTextos: Array<string> = ['exemplo 4', 'exemplo 5', 'exemplo 6'] // string array

// métodos comuns em arrays:
// Push: adiciona novo item ao final da array
numeros.push(4) // [ 1, 2, 3, 4 ]
textos.push('exemplo 7') // [ 'exemplo 1', 'exemplo 2', 'exemplo 3', 'exemplo 7' ]
console.log(numeros)
console.log(textos)

// ReadonlyArray: array somente leitura, remove todos os métodos de alteração
let numerosDaMega: ReadonlyArray<number> = [3, 7, 12, 24, 37, 39]
let meusNomes: Readonly<string> = ['Angela', 'Caldas']
numerosDaMega[0] = 12 // error
numerosDaMega.push(23) // error
numerosDaMega.pop() // error
meusNomes.length = 100 // error
// Se tentarmos transpilar, recebemos o erro 'Index signature in type 'readonly number[]' only permits reading.'

// Tuple: tuplas são estruturas semelhantes a arrays, porém elas aceitam mais de um tipo diferente, enquanto as arrays trabalham apenas com um tipo. Tuplas aceitam os mesmos métodos das arrays
let list: [string, number, string] = ['string 1', 1, 'string 2']
// A partir da versão 4.0 do TypeScript, é possível incluir nomes aos parâmetros, o que ajuda a deixar o código mais legível
let newList: [nome: string, idade: number, email: string] = ['Bill Gates', 65, 'bill@teste.com']
list.push('Steve', 2)
console.log(list[0]) // string 1
console.log(list[2]) // string 2
// Também é possível trabalhar com readonly
let otherList: readonly [string, number] = ['Bill Gates', 1]
otherList.push('Steve', 2) // error