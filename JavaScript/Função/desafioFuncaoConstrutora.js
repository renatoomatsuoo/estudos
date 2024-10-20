function Pessoa(nome, idade, falar) {
    this.nome = nome,
    this.idade = idade,
    this.falar = function() {
            console.log(`Meu nome é ${nome} e minha idade é ${idade}.`)
    }
}



const pessoa1 = new Pessoa('Renato', 32)
const pessoa2 = new Pessoa('Camila', 28)

pessoa1.falar()
pessoa2.falar()