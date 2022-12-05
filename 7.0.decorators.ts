// Decorators permitem 'decorar' dinammicamente as características de uma classe. Para habilitar, precisamos descomentar a linha 'experimentalDecorators' no tsconfig.json. Decorators, apesar de experimentais, já são utilizados pelo Angular e pelo Inversify
// Decorators recebem três parâmetros: target (alvo), propertyKey (chave) e descriptor (descritor).
// target: método estático ou function construtora
// propertyKey: membro da instância que será usada no target
// descriptor: método Object.getOwnPropertyDescriptor(), que retorna um descritor de propriedades para uma outra propriedade

// Vamos criar um decorator para usarmos na nossa classe Conta, no arquivo 4.0.oop.ts