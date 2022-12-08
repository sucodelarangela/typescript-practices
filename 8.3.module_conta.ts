export abstract class Conta {
  // a) atributos: armazenam as informações que descrevem o objeto (como variáveis)
  private readonly _numeroDaConta: number; // readonly impede alterações
  titular: string;
  private _saldo: number; // private não permite que o atributo seja acessado fora da classe

  // d) Getter
  get numeroDaConta(): number {
    return this._numeroDaConta;
  }

  // c) Métodos: servem para identificar e executar operações que a classe fornecerá (manipular atributos)
  // protected faz com que os métodos sejam acessados somente pela própria classe Conta e pelas classes que a herdarem
  protected consultaSaldo(): number {
    return this._saldo;

  }

  protected adicionaSaldo(saldo: number): void {
    this._saldo += saldo;
  }

  protected sacarDoSaldo(valor: number): void {
    this._saldo -= valor;
  };

  // b) construtor: espécie de função para acessar os atributos
  constructor(titular: string, saldo: number) {
    this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
    this.titular = titular;
    this._saldo = saldo;
  }
}