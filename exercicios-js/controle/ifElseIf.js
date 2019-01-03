/*

const imprimirResultado2 = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }
    else if(nota <7){
        console.log("Reprovado!")
    }
}


imprimirResultado2(3)
imprimirResultado2(10)
imprimirResultado2("Epa!") // nao da erro, mas nao imprime

*/


Number.prototype.entre = function (minimo, maximo){
    return this >= minimo && this <=maximo
}


const imprimirResultado = function(nota){
    try{
        if(nota.entre(9,10)){
            console.log("Summa cum laudem!!!")
        }
        else if(nota.entre(7,8.99)){
            console.log("Aprovado!")
        }
        else if(nota.entre(4, 6.99)){
            console.log("Recuperação!")
        }
        else if(nota.entre(0,3.99)){
            console.log("Reprovado!")
        }
        else{
            console.log("Nota invalida!!!")
        }
    }
    catch(erro){
        console.log("TEM Q SER UM NUMERO, SEU NOOB!!!")
    }
}


imprimirResultado(2)
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6.6)
imprimirResultado("SFSFESES")