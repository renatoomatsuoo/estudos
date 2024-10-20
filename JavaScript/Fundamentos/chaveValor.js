const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

const Cliente = {
    nome: 'Renato',
    idade: '32',
    peso: '55',
    endereco: {
        logradouro: 'Av. Celso Garcia',
        numero: '1907'
    }
}

console.log(saudacao)
console.log(exec())

console.log(Cliente.nome, Cliente.idade)
console.log(Cliente.endereco.logradouro, Cliente.endereco.numero)