function tratarErroELancar(erro){
    // throw new Error ("Erro tosco...")
    // throw 10
    throw {
        msg: erro.message,
        name: erro.name,
        date: new Date 
    }
}

function imprimirNomeGritado(obj){
    //no try se coloca codigo potencialmente perigoso
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    }
    //erros sao tratados no bloco catch
    catch(e){
        tratarErroELancar(e)
    }
    finally{ //bloco finally sempre eh executado; opcional
        console.log('final')
    }
    
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)  // aqui da um erro

