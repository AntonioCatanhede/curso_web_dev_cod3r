// hoisting = içando (alguma coisa)
console.log('a = ', a) // aqui 'a' é "içado"
var a = 2
console.log('a = ', a)

/* o codigo acima eh equivalente ao abaixo:
var a
console.log('a = ', a) // aqui 'a' é "içado"
var a =2
console.log('a = ', a)
*/

//aqui o efeito eh o msm
function teste() {
    console.log('a = ', a) // aqui 'a' é "içado"
    var a = 2
    console.log('a = ', a)
}

teste()

/*aqui 'b' nao seria "içado"; so funciona com var

console.log('b = ', b) 
let b = 2
console.log('b = ', b)

*/
