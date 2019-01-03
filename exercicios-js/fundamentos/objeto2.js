console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

//classes sao "syntax sugars", atalhos para representar funcoes
class Produto {} // ES 2015 {ES06}

console.log(typeof Produto)
console.log(typeof new Produto())
// pode-se omitir os parenteses:
console.log(typeof new Produto)

//quando criamos coisas de forma literal ja estamos criando objetos




