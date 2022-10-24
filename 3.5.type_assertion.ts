// Com o type assertion podemos mudar o type de uma variável. Basta passar o type entre <>
function typeAssertions(codigoAny: any) {
    let codigoNumber = <number>codigoAny; // aqui mudamos o parâmetro recebido na função de any para number
    return codigoAny
}
typeAssertions(10)