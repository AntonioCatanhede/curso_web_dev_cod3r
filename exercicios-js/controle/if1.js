function sobBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

sobBoaNoticia (8.1)
sobBoaNoticia (6.1)

function seForVerdadeEuFalo (valor){
    if(valor){
        console.log('É verdade ... ' + valor)
    }
    else{
        console.log("Não é vdd... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo({oi: "noob"})