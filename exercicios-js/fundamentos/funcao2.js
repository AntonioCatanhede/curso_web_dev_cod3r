// Armazenando funcao em variavel e em constante

let dividir = function(a,b){

    return a/b
}

console.log(dividir(8,4))




const imprimirSoma = function(a,b){

    console.log(a+b)
}

imprimirSoma(2,3)


//Armazenando funcao arrow em variavel

const soma = (a,b) => {

    return a+b
}

console.log(soma(2,3))

//retorno implicito

const subtracao = (a,b)  => a-b

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)

imprimir2('LEGAL!')