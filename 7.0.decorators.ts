// Decorators permitem 'decorar' dinammicamente as características de uma classe. Para habilitar, precisamos descomentar a linha 'experimentalDecorators' no tsconfig.json. Decorators, apesar de experimentais, já são utilizados pelo Angular e pelo Inversify
// Decorators recebem três parâmetros: target (alvo), propertyKey (chave) e descriptor (descritor).
// target: método estático ou function construtora
// propertyKey: membro da instância que será usada no target
// descriptor: método Object.getOwnPropertyDescriptor(), que retorna um descritor de propriedades para uma outra propriedade

// método decorador
function analisaSaldo(target: any, key: any, descriptor: any) {
  // implementação
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

class Account {
  accountNumber: number;
  @validaTitular
  owner: string;
  balance: number;

  constructor(accountNumber: number, owner: string, balance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  };

  adicionaSaldo(@saldo() balance: number): void {
    this.balance + balance;
  }

  @analisaSaldo
  consultaSaldo(): string {
    return `O seu saldo atual é ${this.balance}`;
  }
}

// Decorators de propriedade recebe target e propertyKey. Target é o protótipo da classe que está sendo aplicado o decorator, key é o nome da propriedade.
// Decorator de parâmetro deve ser declarado antes da declaração de um parâmetro e recebe target, propertyKey e parameterIndex (posição de um parâmetro na função)
