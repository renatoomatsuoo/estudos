function soma (a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma(0,0,0))
console.log(soma())
console.log(soma(2,5,10))
console.log(soma(1, 4, 'teste'))

function soma1 (a = 1, b = 1, c = 1) {
    return a + b + c

}

console.log()
console.log(soma1(0, 0, 0))
console.log(soma1(1, 2, 'teste'))
console.log(soma1(5, 3, 2))
console.log(soma1(5, 3))