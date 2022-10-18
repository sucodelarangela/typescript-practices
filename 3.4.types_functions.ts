// Tipar nossas funções informa ao compilador qual o tipo que elas devem retornar
// A função abaixo recebe um number e retorna uma string
function calc(x: number, y: number): string {
    return `resultado: ${x + y}`
}
// Se let resultado fosse do tipo number, o TS reportaria um erro, pois o retorno da função é uma string e esse retorno não poderia ser atribuído a uma variável do tipo number
let resultado: string
resultado = calc(10, 15)
console.log(typeof resultado)

// Void: muito usado com funções, é o oposto de Any, indicando ao compilador que aquela função não terá nenhum retorno
function log(): void {
    console.log('Void: Sem retorno')
}
log()

// Never: indica que algo NUNCA DEVE ACONTECER, podendo ser usado em funções como EXCEPTION
function verificandoTipo(x: string | number): boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }

    return fail('Esse método não aceita esse tipo de type!')
}

function fail(message: string): never {
    throw new Error(message)
}

verificandoTipo('teste String') // true
verificandoTipo(10) // false
let active = true
verificandoTipo(active) // retorna uma exception com a mensagem: Esse método não aceita esse tipo de type!

// Never também pode ser usado em funções sem retorno, como Void
function Update(): never {
    while (true) {
        console.log('Carregando processos!')
    }
}
// A diferença é que Void pode receber o valor null, que indica ausência de um objeto, ou undefined, que indica ausência de qualquer valor
// O type never não pode receber valor.
let something: void = undefined
let nothing: never = null // error
let nothing1: void = null // error