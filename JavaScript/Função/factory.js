function criarProduto(nome, preco,desconto = 10) {
    return {
        nome,
        preco,
        precoFinal: preco - (preco*(desconto/100))
    }
}

let prod1 = criarProduto('Notebook', 2500)
let prod2 = criarProduto('iPad', 3000)

console.log(prod1, prod2)