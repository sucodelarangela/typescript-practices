var languages: Array<string> = []
languages.push("TypeScript")
languages.push(3)

// O código acima apresenta um erro no TS, pois temos uma variável do tipo Array de string e estamos tentando passar um número para ela. Porém, mesmo assim, o compilador do TS irá criar o arquivo JS.
// Para evitar esse comportamento, precisamos acrescentar no tsconfig.json as seguintes linhas:
/*
"compilerOptions": {
    // Outras configurações
    "noEmitOnError": true,
*/
// Se isso não funcionar, também há a opção de rodar essa opção diretamente na linha de comando com tsc --noEmitOnError <arquivo>