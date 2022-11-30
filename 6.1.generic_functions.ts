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