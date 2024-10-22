function Cliente(name, age, user, password, saldo = 0) {
    this.name = name,
    this.age = age,
    this.user = user,
    password = password,
    this.saldo = saldo,

    this.depositar = function(valorDepositado, saldo) {
        if (valorDepositado > 0 && valorDepositado != NaN) {
            saldo = this.saldo += valorDepositado
            console.log(`Depósito no valor de R$${valorDepositado},00 realizado com sucesso!`)
            console.log(`Seu novo saldo é de R$${this.saldo},00.`)
        } else {
            (valorDepositado <= 0)
                console.log('Valor de depósito inválido.')
        }
    
    this.mostrarSaldo = (saldo) => console.log(`Seu saldo é de R$${this.saldo},00.`)
    
    this.sacar = function (valorASacar, saldo) {
        if (valorASacar <= this.saldo && valorASacar > 0 && valorASacar != NaN) {
            let saldo = this.saldo -= valorASacar 
            console.log('Saque foi realizado com sucesso!')
            console.log(`Seu saldo atual é de R$${this.saldo},00.`)
        } else {
            console.log('Saldo insulficiente ou valor inválido.')    
        }
        }
    }
}

let Cliente1 = new Cliente(nome = 'Renato Matsuo', age = 32, user = 'renatoomatsuo', password = '1234')

Cliente1.depositar(500)
Cliente1.depositar('afa')
Cliente1.depositar('a')
Cliente1.depositar(0)
Cliente1.sacar(150)
Cliente1.sacar(50)
Cliente1.sacar(0)
Cliente1.sacar('aaa')
Cliente1.sacar(-1)
console.log(Cliente1.user)
console.log(Cliente1.password)