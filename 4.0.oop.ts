// Como boa prática, o objeto conta ficaria dentro de um arquivo com o mesmo nome dela, por exemplo "conta.ts"
class Conta {
    // a) atributos: armazenam as informações que descrevem o objeto (como variáveis)
    numeroDaConta: number;
    titular: string;
    saldo: number;

    // c) Métodos: servem para identificar e executar operações que a classe fornecerá (manipular atributos)
    consultaSaldo(): string {
        return `O seu saldo atual é: ${this.saldo}`
    }

    adicionaSaldo(saldo: number): void {
        this.saldo + saldo
    }

    sacarDoSaldo(valor: number): void {
        this.saldo -= valor
    }

    // b) construtor: espécie de função para acessar os atributos
    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

}

// Para criar um objeto a partir da nossa classe, precisamos instancia-la através da palavra reservada NEW
const primeiraConta = new Conta(1, "Thiago Adriano", 1000)
console.log(primeiraConta.saldo)