// Decorators permitem 'decorar' dinammicamente as características de uma classe. Para habilitar, precisamos descomentar a linha 'experimentalDecorators' no tsconfig.json. Decorators, apesar de experimentais, já são utilizados pelo Angular e pelo Inversify
// Decorators recebem três parâmetros: target (alvo), propertyKey (chave) e descriptor (descritor).
// target: método estático ou function construtora
// propertyKey: membro da instância que será usada no target
// descriptor: método Object.getOwnPropertyDescriptor(), que retorna um descritor de propriedades para uma outra propriedade

// Vamos criar um método decorator para usarmos na nossa classe Conta, no arquivo 4.0.oop.ts

// Decorators de propriedade recebe target e propertyKey. Target é o protótipo da classe que está sendo aplicado o decorator, key é o nome da propriedade.
// Decorator de parâmetro deve ser declarado antes da declaração de um parâmetro e recebe target, propertyKey e parameterIndex (posição de um parâmetro na função)