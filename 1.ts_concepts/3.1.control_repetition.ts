// SWITCH: usada para validar mais de um cenário em uma única instrução, passando o valor a ser validado no parâmetro do switch e, em cada case, o valor que deseja verificar
let profile = 'admin'

switch (profile) {
    case 'superuser':
        console.log('Super user')
        break
    case 'manager':
        console.log('Manager');
        break;
    case 'admin':
        console.log('Administrator') // retorna Administrator
        break;
    case 'user':
        console.log('Common user');
        break;
    default:
        console.log('No profile') // caso não caia em nenhuma das condições acima
}

// WHILE: executa repetição de um bloco enquanto uma condição for verdadeira
let condicao = true

while (condicao) {
    console.log('Carregando...')
    condicao = false
}

// DO-WHILE: funciona quase como o while, mas os comandos sempre são executados pelo menos uma vez. No exemplo abaixo, teremos um log e logo depois mudamos o valor da condição, fazendo com que o loop pare
// condicao = false:
{
    console.log('Carregando...') // retorna 'Carregando...' uma vez
}
while (condicao);

// FOR: semelhante ao while, mas com um alor inicial e um valor final para o loop iniciar e terminar
var languages = ['C#', 'Java', 'JavaScript', 'TypeScript']

for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]) // retorna C#, Java, JavaScript e TypeScript
}

// FOREACH: simplificação do operador for para trabalhar com coleções de dados. Permite acessar cada elemento individualmente iterando sobre toda a coleção
languages.forEach(element => {
    console.log(element) // mesmo retorno do for
})