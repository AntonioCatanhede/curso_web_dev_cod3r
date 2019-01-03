const escola = "Cod3r"
let Escola2 = "Cod3r"
let Escola3 = "Cod33r"

console.log(escola.charAt(4))

//nao gera erro; retorna vazio
console.log(escola.charAt(6)) 


console.log(escola.charCodeAt(3))// valor Unicode
console.log(escola.indexOf('C'))
console.log(escola.indexOf('r'))
console.log("o index de 3 eh %d",escola.indexOf('3'))


//substring que comeca de index=1
console.log(escola.substring(1))
//substring que vai de index=1 a index=3
console.log(escola.substring(0,3))


//concatenacao funciona tanto com literal quanto com variavel
//quanto com constante
console.log('Escola '.concat(escola).concat("!"))
//outra maneira
console.log('Escola ' + escola +"!")


// substitui o caractere de index 3 por 'e'
// nao modifica a constante
console.log(escola.replace(3, 'e'))
console.log(Escola2.replace(3, 'e'))


console.log(escola) //nao modifica a constante
console.log(Escola2)//nao modifica a variavel

//utilizando expressões regulares

/* "/\w/" substitui o primeiro caractere ou digito por 'e'
   a flag 'g', de "global", indica que todos os caracteres 
   e digitosdevem ser substituidos      */
console.log(escola.replace(/\w/g, 'e'))

//Substitui todos numeros por 'e'
console.log(Escola3.replace(/\d/, 'e'))
//com a flag 'g', todos os digitos sao substituidos
console.log(Escola3.replace(/\d/g, 'e'))



console.log(escola.repeat(4))
console.log('Oi, amigo!\n'.repeat(4))


//cria um array
console.log('Ana,Maria,Pedro'.split(','))











