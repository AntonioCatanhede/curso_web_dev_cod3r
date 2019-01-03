const peso1 = 1.0 
//pontos flutuantes e inteiros sao do tipo number

const peso2 = Number('2.0')

const peso3 = 1.2 

console.log(peso1, peso2, peso3)
console.log(Number.isInteger(peso1)) //true
console.log(Number.isInteger(peso2))//true
console.log(Number.isInteger(peso3))//false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2

const media = total/(peso1 + peso2)
console.log(media.toFixed(2))// 2 casas decimais
console.log(media.toString()) //imprime como string
console.log(media.toString(2))//converte pra binario
console.log(typeof media) // tipo number
console.log(typeof Number) // é uma funcao

