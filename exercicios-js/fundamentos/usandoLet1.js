var numero = 1
{
    //let tb tem escopo de bloco
    let numero = 2

    console.log('dentro = ',numero)
}

console.log('fora = ',numero)




let numero1 = 3

{
    let numero1 = 4

    console.log('dentro = ',numero1)

}

console.log('fora = ',numero1)
