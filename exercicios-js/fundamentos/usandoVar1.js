{
    {
        {
            {
                var sera = 'será??'
            }
        }
    }
}

//variaveis tipo var declaradas em escopos que nao sao de funcoes
//sao tratadas como variaveis globais, independentemente de quao
//aninhadas no codigo a declaracao dessas funcoes esteja
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()

// console.log(local) daria um erro

