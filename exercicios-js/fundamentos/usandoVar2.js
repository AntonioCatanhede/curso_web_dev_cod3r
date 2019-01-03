var numero = 1

console.log('logo apos declaracao = ',numero)

{
    var numero =2 //sobrescreve a declaracao anterior
    console.log('dentro = ',numero)
}

console.log('fora = ',numero)