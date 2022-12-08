// tipos literais de objeto: definem um tipo de objeto no TypeScript, sendo semelhantes a um object literals do JavaScript, mas os campos são separados por ponto e vírgula e não por vírgulas:
let pessoa: {
    nome: string;
    idade: number;
    email: string;
    telefone: number;
};

// Quando o TS compara dois tipos de objeto, ele compara suas propriedades de cada objeto.
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com', telefone: 555555555 }; // compatível
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com', telefone: '555555555' }; // error: Type 'string' is not assignable to type 'number'.
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com' }; // error: Property 'telefone' is missing in type...
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com', telefone: 555555555, endereco: 'rua x' }; // error: Object literal may only specify known properties, and 'endereco' does not exist in type...

// Duplicando propriedades sem repetir o tipo:
// let pessoa: { nome: string; idade: number; email: string; telefone: number }
// let pessoa2: { nome: string; idade: number; email: string; telefone: number }
// Podemos usar 'typeof'
let pessoa2: typeof pessoa;

// Mas também podemos usar interfaces:
interface Pessoa {
    nome: string;
    idade: number;
    email: string;
    telefone?: number; // ? define propriedade opcional
}

let pessoa3: Pessoa;

// interfaces também estendem outras interfaces ou classes:
interface PessoaJuridica extends Pessoa {
    conta: number;
    cnpj: number;
    abrirConta?(): boolean; // adicionando um método opcional
}

// Podemos também ter propriedades de nomes, como constantes:
const exemplo1 = 'string';
const exemplo2 = Symbol();

interface MeuExemplo {
    [exemplo1]: string;
    [exemplo2]: boolean;
}

// 