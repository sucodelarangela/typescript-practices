// continuação de tipos

// Union: permite combinar um ou mais tipos, separados por uma barra vertical |
let exemploVariavel: (string | number)
exemploVariavel = 123
console.log(typeof exemploVariavel)
exemploVariavel = 'abc'
console.log(typeof exemploVariavel)

let exemploVariavel2: (string | number | boolean)
exemploVariavel2 = 123
console.log(typeof exemploVariavel2)
exemploVariavel2 = 'abc'
console.log(typeof exemploVariavel2)
exemploVariavel2 = true
console.log(typeof exemploVariavel2)

// também pode ser usado com arrays
let arr: (number[] | string[])
let i: number
arr = [1, 2, 4]
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr = ['A', 'B', 'C', 'D']
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Pode ser usado como parâmetro de funções
function deleteTest(usuario: string | string[]) {
    // usuario pode ser uma string ou uma array de strings
    if (typeof usuario == 'string') {
        console.log(usuario)
    } else {
        let i
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], 'deletado')
        }
    }
}
// nesse caso, podemos usar a função deleteTest para apagar um registro (string) ou vários registros (array de strings)
deleteTest('Angela') // deleta apenas um registro
deleteTest(['Angela', 'Xuxu']) // deleta mais de um registro