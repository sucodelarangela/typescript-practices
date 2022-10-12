const a: string = 'Hello World'
console.log(a)

/*
O comando tsc <arquivo> cria um novo arquivo JS na mesma pasta do seu arquivo TS
Este arquivo JS é uma TRANSPILAÇÃO do arquivo TS.

O compilador do TS é configrável e permite definir:
- o local onde os arquivos .ts estão em nosso projeto
- o diretório de destino dos arquivos transpilados
- a versão ECMAScript utilizada
- o nível de restrição do verificador de tipos
- etc...
Essas configurações são passadas no arquivo tsconfig.json.
Para criar esse arquivo, usamos o comando tsc --init
*/