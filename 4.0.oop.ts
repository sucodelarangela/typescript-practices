// Como boa prática, o objeto conta ficaria dentro de um arquivo com o mesmo nome dela, por exemplo "conta.ts"
class Conta {
    // a) atributos: armazenam as informações que descrevem o objeto (como variáveis)
    numeroDaConta: number;
    titular: string;
    private saldo: number; // private não permite que o atributo seja acessado fora da classe

    // c) Métodos: servem para identificar e executar operações que a classe fornecerá (manipular atributos)
    consultaSaldo(): string {
        return `O seu saldo atual é: ${this.saldo}`
    }

    adicionaSaldo(valor: number): void {
        this.saldo += valor
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
primeiraConta.adicionaSaldo(750)

// Herança: permite reutilizar código sem a necessidade de duplica-lo (palavra chave EXTENDS)
class contaPF extends Conta {
    cpf: number;

    constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number) {
        super(numeroDaConta, titular, saldo)
        this.cpf = cpf
    }
}

class contaPJ extends Conta {
    cnpj: number;

    constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number) {
        super(numeroDaConta, titular, saldo)
        this.cnpj = cnpj
    }
}

const pessoaFisica = new contaPF(12345678900, 1, "Thiago Adriano", 1000)
const pessoaJuridica = new contaPJ(12345678000177, 1, "Thiago Adriano", 1000)

console.log(pessoaJuridica)