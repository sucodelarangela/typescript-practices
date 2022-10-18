// typeof e instanceof são chamados de Type Guard do JS

// typeof: usado quando precisamos verificar o tipo de um objeto dentro de um bloco condicional, como if ou switch/case
let x: string | number | boolean = 13
console.log(typeof x) // pode ser usado com ou sem parênteses
console.log(typeof (x))

// instanceof: mesma funcionalidade do typeof, mas retorna um boolean
interface Z {
    x(): string
}

class A implements Z {
    x(): string {
        throw new Error('Method not implemented')
    }
}

class B implements Z {
    x(): string {
        throw new Error('Method not implemented')
    }
}
// a função abaixo recebe uma interface Z e nela validamos se a classe que está sendo passada é A ou B
function exemploComInstanceOf(parametro: Z) {
    if (parametro instanceof A) {
        console.log('Sou classe A')
    } else if (parametro instanceof B) {
        console.log('Sou classe B')
    }
}

exemploComInstanceOf(new A())