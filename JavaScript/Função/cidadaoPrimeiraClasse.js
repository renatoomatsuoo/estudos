// função literal
function func1() {
    
}

// armazenar função em variável
const func2 = function() {

}

// armazenar em uma array
const array = [function(a, b) {return a * b}, func1, func2]
console.log(array[0](2, 5))

// /armazenar em um atributo de objeto
const pessoa = {}
pessoa.falar = function () { return 'Opa'}
console.log(pessoa.falar())

// função como parâmetro para outra função
function run(fun) {
    fun()
}

run(function() {
    console.log('Executando..')
    }
)

// uma função pode retornar/ conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1,2)(5)