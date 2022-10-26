// IF-ELSE: validação de booleanos
let condition = false;
if (condition) {
    console.log('A variável está com um valor true')
} else {
    console.log('A variável está com um valor false') // resultado esperado
}

// IF-ELSE-IF: validar mais de uma condição
let perfil = 'admin'
if (perfil == 'superuser') {
    console.log('Super usuário')
} else if (perfil == 'admin') {
    console.log('Administrador') // retorna Administrador
} else {
    console.log('Usuário comum')
}

// OPERADOR TERNÁRIO: avalia uma expressão booleana
// Avaliando dois perfis:
console.log(perfil == 'superuser' ? 'Super usuário' : 'Administrador') // retorna Administrador
// Avaliando os três perfis:
console.log(perfil == 'superuser' ? 'Super usuário' : perfil == 'admin' ? 'Administrador' : 'Usuário comum')

// NULLISH COALESCING: permite verificar se o valor da direita é null ou undefined. Se sim, retorna o resultado padrão, se não, retorna o valor da direita
console.log(perfil ?? 'Usuário comum')
perfil = null
console.log(perfil ?? 'Usuário comum')
perfil = undefined
console.log(perfil ?? 'Usuário comum')