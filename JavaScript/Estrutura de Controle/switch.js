const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        default:
            console.log('Recuperação')
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)