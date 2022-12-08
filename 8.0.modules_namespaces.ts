// NAMESPACES
// Permite organizar o código, deixando-o agrupado por nome, por exemplo: imaginando que temos a demanda de criar mais duas implementações da classe Conta, uma para Salário e outra para Investimento. Poderíamos criar assim:
// class ContaSalario extends Conta {}
// class ContaInvestimento extends Conta {}
// Porém, começamos a expandir demais nosso código. Para isso, podemos criar um namespace Banco para organizar nossas classes. Vamos implementar isso no nosso arquivo 4.0.oop.ts

// MODULES
// Utilizam o mesmo conceito de namespaces com a utilização da palavra reservada export, mas precisamos usar um module loader e, para chamar um module dentro de outro arquivo, precisamos usar a palavra reservada import.
// Module loader é uma biblioteca que nos permite trabalhar com modules nos nossos projetos. Os mais comuns são CommonJs e Require.js
// Vamos alterar os exemplos anteriores de namespaces para modules.