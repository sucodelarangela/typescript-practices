// NAMESPACES
// Permite organizar o código, deixando-o agrupado por nome, por exemplo: imaginando que temos a demanda de criar mais duas implementações da classe Conta, uma para Salário e outra para Investimento. Poderíamos criar assim:
// class ContaSalario extends Conta {}
// class ContaInvestimento extends Conta {}
// Porém, começamos a expandir demais nosso código. Para isso, podemos criar um namespace Banco para organizar nossas classes. Vamos implementar isso no nosso arquivo 4.0.oop.ts

// MODULES
// Utilizam o mesmo conceito de namespaces com a utilização da palavra reservada export, mas precisamos usar um module loader e, para chamar um module dentro de outro arquivo, precisamos usar a palavra reservada import.
// Module loader é uma biblioteca que nos permite trabalhar com modules nos nossos projetos. Os mais comuns são CommonJs e Require.js
// Vamos alterar os exemplos anteriores de namespaces para modules.

// QUANDO USAR:
/**
namespaces:
 * Trabalham com escopo global, então não precisam de import/export
 * Organização mais lógica e feita em objetos
 * Um namespace pode ser usado em mais de um arquivo
 * Não precisam de nenhuma biblioteca para serem usados

modules:
* Não ficam em escopo global, então precisam de import/export
* Cada implementação é um module separado
* Precisam de uma biblioteca
*/