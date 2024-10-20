function tratarErroELancar(erro) {
    throw false
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome: 'Renato' }

imprimirNomeGritado(obj)