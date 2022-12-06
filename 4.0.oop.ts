// Como boa prática, o objeto conta ficaria dentro de um arquivo com o mesmo nome dela, por exemplo "conta.ts"
abstract class Conta {
    // a) atributos: armazenam as informações que descrevem o objeto (como variáveis)
    private readonly _numeroDaConta: number; // readonly impede alterações
    @validaTitular
    titular: string;
    private _saldo: number; // private não permite que o atributo seja acessado fora da classe

    // d) Getter
    get numeroDaConta(): number {
        return this._numeroDaConta;
    }

    // c) Métodos: servem para identificar e executar operações que a classe fornecerá (manipular atributos)
    // protected faz com que os métodos sejam acessados somente pela própria classe Conta e pelas classes que a herdarem
    @analisaSaldo
    protected consultaSaldo(): string {
        return `O seu saldo atual é: ${this._saldo}`;
    }

    protected adicionaSaldo(@saldo() saldo: number): void {
        this._saldo += saldo;
    }

    protected sacarDoSaldo(valor: number): void {
        this._saldo -= valor;
    }

    // b) construtor: espécie de função para acessar os atributos
    constructor(titular: string, saldo: number) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }
}

// Para criar um objeto a partir da nossa classe, precisamos instancia-la através da palavra reservada NEW
const primeiraConta = new Conta("Thiago Adriano", 1000); // error por ser classe abstrata
primeiraConta.adicionaSaldo(750); // error por causa do protected

// Herança: permite reutilizar código sem a necessidade de duplica-lo (palavra chave EXTENDS)
class ContaPF extends Conta implements Tributavel {
    cpf: number;

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

    sacar(valor: number) {
        if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    }

    CalculaTributo(): number {
        // implementação
    }

    constructor(cpf: number, titular: string, saldo: number) {
        super(titular, saldo);
        this.cpf = cpf;
    }
}

class ContaPJ extends Conta implements Tributavel {
    cnpj: number;

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

    // na conta PJ o cliente pode ficar negativo
    sacar(valor: number) {
        this.sacarDoSaldo(valor);
    }

    CalculaTributo(): number {
        // implementação
    }

    constructor(cnpj: number, titular: string, saldo: number) {
        super(titular, saldo);
        this.cnpj = cnpj;
    }
}

const pessoaFisica = new ContaPF(12345678900, "Thiago Adriano", 1000);
const pessoaJuridica = new ContaPJ(12345678000177, "Thiago Adriano", 1000);

console.log(pessoaFisica.numeroDaConta); // sem o getter, retorn undefined

// Melhores práticas implementadas: número da conta gerado pela classe em vez de ser passado, método sacar com validação de saldo, métodos da classe pai protegidos para serem acessados somente nas classes filhas

// GETTER: método utilizado quando queremos acessar o valor de uma propriedade. Exemplo na class Conta (d)
// SETTER: método utilizado quando queremos alterar o valor de uma propriedade

// Classes abstratas: não permitem realizar qualquer tipo de instância, elas são usadas como modelos pra outras classes (concretas). Basta adicionar a palavra chave 'abstract' antes da classe.
const novaConta = new Conta(); // error Cannot create an instance of an abstract class.

// IMPLEMENTANDO INTERFACES
// Interfaces funcionam como um "contrato" que obriga a classe a definir todos os seus métodos e propriedades
interface Tributavel {
    CalculaTributo(): number;
}

// Nas classes ContaPJ e ContaPF, implementamos a interface com a palavra chave 'implements'

// DECORATORS
function analisaSaldo(target: any, key: any, descriptor: any) {
    // implementação
    // decorator na classe Conta
}

function validaTitular(target: any, propertyKey: any) {
    // implementação
}

function saldo() {
    return (
        target: any,
        propertyKey: number,
        parameterIndex: number
    ) => {
        console.log('target', target); // target Conta {}
        console.log('property key', propertyKey); // property key adicionaSaldo
        console.log('parameter index', parameterIndex); // parameter index 0
    };
}