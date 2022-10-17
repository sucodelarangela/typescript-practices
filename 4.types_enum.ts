// continuação sobre Tipos

// Enum: permite declarar um conjunto de valores/constantes predefinidos. Pode ser trabalhado como Number, String ou Heterogeneous

// Number: armazenam STRING com valores numéricos. Se nenhum valor numérico for dado, o TS automaticamente iniciará em 0 com incremento de +1 para os demais
export enum DiaDaSemana {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}
console.log(DiaDaSemana)
// Podemos também passar apenas o primeiro valor e o TS também fará o incremento
export enum weekDays {
    Monday = 18,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(weekDays)

// Para acessar um valor dentro de um ENUM, podemos fazer das formas abaixo:
console.log(DiaDaSemana[2]) // Terca
console.log(DiaDaSemana['Terca']) // 2
console.log(weekDays['Thursday']) // 21

// String: os enums do tipo string devem SEMPRE iniciar com algum valor
export enum DiasDaSemana {
    Segunda = 'Segunda-feira',
    Terca = 'Terça-feira',
    Quarta = 'Quarta-feira',
    Quinta = 'Quinta-feira',
    Sexta = 'Sexta-feira',
    Sabado = 'Sábado',
    Domingo = 'Domingo'
}
console.log(DiasDaSemana)
console.log(DiaDaSemana['Domingo']) // 7
console.log(DiaDaSemana.Sexta) // 5

// Heterogeneous: aceitam os dois tipos de valores: strings e números
export enum Heterogeneous {
    Segunda = 'Segunda-feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18
}
console.log(Heterogeneous.Segunda) // Segunda-feira
console.log(Heterogeneous['Segunda']) // Segunda-feira
console.log(Heterogeneous[1]) // Terca
console.log(Heterogeneous.Sexta) // 4
console.log(Heterogeneous[18]) // Domingo