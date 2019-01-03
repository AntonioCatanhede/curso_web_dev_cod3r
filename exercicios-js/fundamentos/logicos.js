function compras(trabalho1, trabalho2){

    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) != trabalho2 // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // tb funciona como xor
    const manterSaudavel = !comprarSorvete //operador unario
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    //aqui, por debaixo dos panos esta sendo criado um par chave-valor
    //eh um recurso novo do ECMA Script 2015
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
