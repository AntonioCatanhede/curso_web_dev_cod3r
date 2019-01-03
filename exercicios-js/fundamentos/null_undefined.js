//objetos sao passados por referencia

//tipos basicos sao atribuidos por copia

let valor

console.log(valor) // undefined, nao inicializada

valor = null // ausencia de valor, mas esta definida

console.log(valor)

/* com 'null', a variavel fica vazia, deixa de apontar
para outra variável ou para algum conteudo */

/* nunca eh legal definir a variavel com undefined */

// console.log(valor.toString()) //dá 'Type Error'

const produto = {}

console.log(produto.preco)// undefined

// console.log(produto.preco.a)// da erro 

produto.preco = 3.5

console.log(produto)

produto.preco = undefined //nao eh legal fazer isso
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null // sem preco =/= 0
console.log(!!produto.preco)//retorna false
console.log(produto)












