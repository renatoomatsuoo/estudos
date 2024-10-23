const notas = [6.7, 7.0, 7.5, 8.9]

for (let i in notas) {
    console.log(`A nota ${i} foi: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    idade: 50,
    peso: 60
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

