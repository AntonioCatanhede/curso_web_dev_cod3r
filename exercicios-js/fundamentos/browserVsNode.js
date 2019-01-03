/* FORA FEITOS TESTES NO CONSOLE DO CHROME
PARA EXEMPLIFICAR COMO FUNCIONA A QUESTÃO DE
ESCOPOS EM UM BROWSER. LÁ,  O OBJETO Window
"absorve" todas as variaveis declaradas com
'var', mas não com 'let'*/

let a = 3 // nao exportada para o objeto global

global.b = 123

this.c = 456

console.log(a)
console.log(this.a) //undefined
console.log(global.a) //undefined

console.log(b)
console.log(global.b)
console.log(this.b) //undefined

//console.log(c) //daria Reference Error
console.log(this.c)//
console.log(global.c)
console.log(module.exports.c)
console.log(module.exports === this)

this.d = false
this.e = 'teste'

console.log(module.exports)
//EQUIVALENTE A:
//module.exports = {c: 456, f: false, g: 'teste'}

abc = 123 //criando uma variavel maluca (sem var nem let)
//acima, criamos uma variavel diretamente no objeto global
//do Node. Nunca fazer isso. Sempre usar var ou let quando
//escrever um arquivo js tendo o Node como o runtime

console.log(global)