const [a] = [10] //usando o operador destructuring para array

console.log(a)

const [n1, , n3, , n5, , n6=0]= [10,7,9,8,6]


console.log(n1,n3,n5,n6)

const [,[, nota] ] = [12, [1, 9, 11], 87]
console.log(nota)