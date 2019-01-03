//destructuring com objetos como parametros de funcao
function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max:50, min:40}
console.log(rand(obj))

console.log(rand({min:955}))
console.log(rand({}))
b = rand ({})

//para quando imprime 0
while(b!= 0){
    b = rand ({})
    console.log(b)
}

//console.log(rand()) // daria erro de destructuring


