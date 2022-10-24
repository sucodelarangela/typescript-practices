// Com o type assertion podemos mudar o type de uma variável. Basta passar o type entre <>
function typeAssertions(codigoAny: any) {
    let codigoNumber = <number>codigoAny;
    return codigoAny
}
typeAssertions(10)