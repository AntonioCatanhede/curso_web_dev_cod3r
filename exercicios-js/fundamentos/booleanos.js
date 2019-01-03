let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

// se um numero eh diferente de zero, a sua negaçao
// eh o valor booleano 'false'
console.log(!isAtivo)
console.log(!!isAtivo)


isAtivo = 0

// se um numero eh diferente de zero, a sua negaçao
// eh o valor booleano 'false'
//Ou seja, todos os inteiros, menos o zero, sao 'true'
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = 65

// se um numero eh diferente de zero, a sua negaçao
// eh o valor booleano 'false'
console.log(!isAtivo)
console.log(!!isAtivo)

isAtivo = -65

// tb vale para numero negativos
console.log(!isAtivo)
console.log(!!isAtivo)


//os tipos que se comporatam como 'true'
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!1)
console.log(!!-3)
console.log(!!-1)
console.log(!!' ') //espaço vazio
console.log(!!'noobice') //string
console.log(!![]) //array
console.log(!!{}) // objeto literal
console.log(!!Infinity) // tipo infinito
// se o resultado da atribuicao, o vlaor atribuido à variavel,
// for um valor resolvido para 'true', entao esse resultado eh 'true' 
console.log(!!(isAtivo = Infinity))

//os tipos que se comporatam como 'false'
console.log('Os falsos...')
console.log(!!0)
console.log(!!'') //sem espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || " "))
console.log(!!(' ' && Infinity && 1 && null))

let nome = ''
console.log(nome || "Desconhecido")

nome = 'Lucas'
console.log(nome || "Desconhecido")







