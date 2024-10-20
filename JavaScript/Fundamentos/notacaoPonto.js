const obj1 = {}
obj1.nome = 'Renato'

obj1['sobrenome'] = 'Tanaka'
obj1.idade = 32

console.log(obj1.nome, obj1.sobrenome, obj1.idade)

function Obj(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.exec = function() {
        return 'Executando'
    }
}

const obj2 = new Obj('Matsuo', 'Tanaka', 32)

console.log(obj2.exec())
console.log(obj2.nome)
console.log(obj2.sobrenome)
console.log(obj2.idade)
console.log(obj2.exec())