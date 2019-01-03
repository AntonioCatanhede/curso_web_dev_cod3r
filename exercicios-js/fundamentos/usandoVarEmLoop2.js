const funcsA = []

for (var i=0; i<10; i++){ //aqui, a 'var' i nao tem escopo de funcao, mas sim global
    funcsA.push(function(){
        console.log(i)
    }) //adicionando funcoes anonimas ao array
}

funcsA[2]()
funcsA[8]()

